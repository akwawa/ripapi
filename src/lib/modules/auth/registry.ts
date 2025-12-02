import type { AuthProvider } from '$lib/core/types';

/**
 * Authentication Provider Registry
 * Manages registration and retrieval of authentication providers
 */
class AuthProviderRegistry {
    private providers: Map<string, AuthProvider> = new Map();
    private activeProvider: AuthProvider | null = null;

    /**
     * Register an authentication provider
     * @param provider - Auth provider to register
     * @throws Error if provider with same ID already exists
     */
    register(provider: AuthProvider): void {
        if (this.providers.has(provider.id)) {
            throw new Error(`Auth provider with id "${provider.id}" is already registered`);
        }

        this.providers.set(provider.id, provider);
        console.log(`Auth provider registered: ${provider.name} (${provider.type})`);
    }

    /**
     * Unregister an authentication provider
     * @param providerId - Provider ID
     */
    async unregister(providerId: string): Promise<void> {
        const provider = this.providers.get(providerId);
        if (!provider) {
            console.warn(`Auth provider "${providerId}" not found`);
            return;
        }

        if (provider.enabled) {
            await provider.destroy();
        }

        if (this.activeProvider?.id === providerId) {
            this.activeProvider = null;
        }

        this.providers.delete(providerId);
        console.log(`Auth provider unregistered: ${provider.name}`);
    }

    /**
     * Get provider by ID
     * @param providerId - Provider ID
     * @returns Auth provider or undefined
     */
    get(providerId: string): AuthProvider | undefined {
        return this.providers.get(providerId);
    }

    /**
     * Get provider by type
     * @param type - Provider type (local, sso, kerberos, etc.)
     * @returns Auth provider or undefined
     */
    getByType(type: string): AuthProvider | undefined {
        return Array.from(this.providers.values()).find((p) => p.type === type);
    }

    /**
     * Get all providers
     * @returns Array of all auth providers
     */
    getAll(): AuthProvider[] {
        return Array.from(this.providers.values());
    }

    /**
     * Get all enabled providers
     * @returns Array of enabled auth providers
     */
    getEnabled(): AuthProvider[] {
        return this.getAll().filter((p) => p.enabled);
    }

    /**
     * Set active provider
     * @param providerId - Provider ID to set as active
     * @throws Error if provider not found or not enabled
     */
    setActive(providerId: string): void {
        const provider = this.providers.get(providerId);
        if (!provider) {
            throw new Error(`Auth provider "${providerId}" not found`);
        }

        if (!provider.enabled) {
            throw new Error(`Auth provider "${providerId}" is not enabled`);
        }

        this.activeProvider = provider;
        console.log(`Active auth provider set to: ${provider.name}`);
    }

    /**
     * Get active provider
     * @returns Active auth provider or null
     */
    getActive(): AuthProvider | null {
        return this.activeProvider;
    }

    /**
     * Check if a provider is registered
     * @param providerId - Provider ID
     * @returns True if provider is registered
     */
    has(providerId: string): boolean {
        return this.providers.has(providerId);
    }
}

// Export singleton instance
export const authProviderRegistry = new AuthProviderRegistry();
