import type { APIProtocol } from '$lib/core/types';

/**
 * API Protocol Registry
 * Manages registration and retrieval of API protocols (REST, GraphQL, SOAP)
 */
class APIProtocolRegistry {
	private protocols: Map<string, APIProtocol> = new Map();

	/**
	 * Register an API protocol
	 * @param protocol - API protocol to register
	 * @throws Error if protocol with same ID already exists
	 */
	register(protocol: APIProtocol): void {
		if (this.protocols.has(protocol.id)) {
			throw new Error(`API protocol with id "${protocol.id}" is already registered`);
		}

		this.protocols.set(protocol.id, protocol);
	}

	/**
	 * Unregister an API protocol
	 * @param protocolId - Protocol ID
	 */
	async unregister(protocolId: string): Promise<void> {
		const protocol = this.protocols.get(protocolId);
		if (!protocol) {
			return;
		}

		if (protocol.enabled) {
			await protocol.destroy();
		}

		this.protocols.delete(protocolId);
	}

	/**
	 * Get protocol by ID
	 * @param protocolId - Protocol ID
	 * @returns API protocol or undefined
	 */
	get(protocolId: string): APIProtocol | undefined {
		return this.protocols.get(protocolId);
	}

	/**
	 * Get protocol by type
	 * @param type - Protocol type (rest, graphql, soap)
	 * @returns API protocol or undefined
	 */
	getByType(type: string): APIProtocol | undefined {
		return Array.from(this.protocols.values()).find((p) => p.protocol === type);
	}

	/**
	 * Get all protocols
	 * @returns Array of all API protocols
	 */
	getAll(): APIProtocol[] {
		return Array.from(this.protocols.values());
	}

	/**
	 * Get all enabled protocols
	 * @returns Array of enabled API protocols
	 */
	getEnabled(): APIProtocol[] {
		return this.getAll().filter((p) => p.enabled);
	}

	/**
	 * Check if a protocol is registered
	 * @param protocolId - Protocol ID
	 * @returns True if protocol is registered
	 */
	has(protocolId: string): boolean {
		return this.protocols.has(protocolId);
	}
}

// Export singleton instance
export const apiProtocolRegistry = new APIProtocolRegistry();
