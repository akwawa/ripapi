import type { AuthProvider, AuthResult } from '$lib/core/types';

/**
 * Bearer Token Authentication Provider
 * For APIs that use Bearer token authentication
 */
export class BearerAuthProvider implements AuthProvider {
	id = 'auth-bearer';
	name = 'Bearer Token Authentication';
	version = '1.0.0';
	description = 'Bearer token authentication for API requests';
	enabled = false;
	type = 'bearer';

	async init(): Promise<void> {
		console.log('Bearer auth provider initialized');
	}

	async destroy(): Promise<void> {
		console.log('Bearer auth provider destroyed');
	}

	async authenticate(credentials: unknown): Promise<AuthResult> {
		// Type guard for credentials
		if (!this.isBearerCredentials(credentials)) {
			return {
				success: false,
				error: 'Invalid credentials format'
			};
		}

		const { token } = credentials;

		if (!token) {
			return {
				success: false,
				error: 'Bearer token is required'
			};
		}

		// For bearer tokens, we just store them for use in API requests
		// No actual authentication happens here
		return {
			success: true,
			token
		};
	}

	async validate(token: string): Promise<boolean> {
		// Bearer tokens are validated by the API being called
		// We just check if token exists
		return !!token && token.length > 0;
	}

	async logout(token: string): Promise<void> {
		// Bearer tokens are stateless, nothing to revoke locally
		console.log(`Bearer token cleared: ${token.substring(0, 10)}...`);
	}

	/**
	 * Type guard for bearer credentials
	 */
	private isBearerCredentials(credentials: unknown): credentials is { token: string } {
		return (
			typeof credentials === 'object' &&
			credentials !== null &&
			'token' in credentials &&
			typeof credentials.token === 'string'
		);
	}
}
