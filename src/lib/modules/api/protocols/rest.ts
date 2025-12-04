import type { APIProtocol, APIRequest, APIResponse, ValidationResult } from '$lib/core/types';

/**
 * REST API Protocol
 * Handles HTTP REST API requests
 */
export class RESTProtocol implements APIProtocol {
	id = 'api-rest';
	name = 'REST API';
	version = '1.0.0';
	description = 'HTTP REST API protocol support';
	enabled = false;
	protocol = 'rest';

	async init(): Promise<void> {
		// REST protocol ready
	}

	async destroy(): Promise<void> {
		// REST protocol cleanup
	}

	async execute(request: APIRequest): Promise<APIResponse> {
		const startTime = performance.now();

		try {
			// Build headers
			const headers = new Headers(request.headers || {});

			// Add authentication
			if (request.auth) {
				this.addAuthHeader(headers, request.auth);
			}

			// Build fetch options
			const options: RequestInit = {
				method: request.method || 'GET',
				headers
			};

			// Add body for methods that support it
			if (
				request.body &&
				(request.method === 'POST' || request.method === 'PUT' || request.method === 'PATCH')
			) {
				if (typeof request.body === 'string') {
					options.body = request.body;
				} else {
					options.body = JSON.stringify(request.body);
					if (!headers.has('Content-Type')) {
						headers.set('Content-Type', 'application/json');
					}
				}
			}

			// Execute request
			const response = await fetch(request.url, options);
			const endTime = performance.now();

			// Parse response
			const contentType = response.headers.get('Content-Type') || '';
			let body: unknown;

			if (contentType.includes('application/json')) {
				body = await response.json();
			} else if (contentType.includes('text/')) {
				body = await response.text();
			} else {
				body = await response.blob();
			}

			// Get response size (approximate)
			const size = new Blob([JSON.stringify(body)]).size;

			// Convert headers to object
			const responseHeaders: Record<string, string> = {};
			response.headers.forEach((value, key) => {
				responseHeaders[key] = value;
			});

			return {
				status: response.status,
				statusText: response.statusText,
				headers: responseHeaders,
				body,
				time: endTime - startTime,
				size
			};
		} catch (error) {
			const endTime = performance.now();

			return {
				status: 0,
				statusText: 'Network Error',
				headers: {},
				body: {
					error: error instanceof Error ? error.message : 'Unknown error'
				},
				time: endTime - startTime,
				size: 0
			};
		}
	}

	async validate(request: APIRequest): Promise<ValidationResult> {
		const errors: Array<{ field: string; message: string }> = [];

		// Validate URL
		if (!request.url) {
			errors.push({ field: 'url', message: 'URL is required' });
		} else {
			try {
				new URL(request.url);
			} catch {
				errors.push({ field: 'url', message: 'Invalid URL format' });
			}
		}

		// Validate method
		const validMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];
		if (request.method && !validMethods.includes(request.method.toUpperCase())) {
			errors.push({ field: 'method', message: 'Invalid HTTP method' });
		}

		return {
			valid: errors.length === 0,
			errors
		};
	}

	/**
	 * Add authentication header based on auth config
	 */
	private addAuthHeader(headers: Headers, auth: NonNullable<APIRequest['auth']>): void {
		switch (auth.type) {
			case 'basic':
				if (auth.credentials?.username && auth.credentials?.password) {
					const encoded = btoa(`${auth.credentials.username}:${auth.credentials.password}`);
					headers.set('Authorization', `Basic ${encoded}`);
				}
				break;

			case 'bearer':
				if (auth.credentials?.token) {
					headers.set('Authorization', `Bearer ${auth.credentials.token}`);
				}
				break;

			case 'api-key':
				if (auth.credentials?.key && auth.credentials?.value) {
					headers.set(auth.credentials.key, auth.credentials.value);
				}
				break;

			default:
				// No authentication or custom - will be handled elsewhere
				break;
		}
	}
}
