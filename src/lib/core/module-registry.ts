import type { Module, ModuleRegistryConfig } from './types';

/**
 * Module Registry - Central registry for all modules
 * Manages module lifecycle (registration, initialization, destruction)
 */
class ModuleRegistry {
	private modules: Map<string, Module> = new Map();
	private config: ModuleRegistryConfig = {};

	/**
	 * Configure the registry
	 * @param config - Registry configuration
	 */
	configure(config: ModuleRegistryConfig): void {
		this.config = config;
	}

	/**
	 * Register a module
	 * @param module - Module to register
	 * @throws Error if module with same ID already exists
	 */
	register(module: Module): void {
		if (this.modules.has(module.id)) {
			throw new Error(`Module with id "${module.id}" is already registered`);
		}

		this.modules.set(module.id, module);
	}

	/**
	 * Unregister a module
	 * @param moduleId - ID of module to unregister
	 */
	async unregister(moduleId: string): Promise<void> {
		const module = this.modules.get(moduleId);
		if (!module) {
			console.warn(`Module "${moduleId}" not found`);
			return;
		}

		if (module.enabled) {
			await module.destroy();
		}

		this.modules.delete(moduleId);
	}

	/**
	 * Get a module by ID
	 * @param moduleId - Module ID
	 * @returns Module instance or undefined
	 */
	get(moduleId: string): Module | undefined {
		return this.modules.get(moduleId);
	}

	/**
	 * Get all registered modules
	 * @returns Array of all modules
	 */
	getAll(): Module[] {
		return Array.from(this.modules.values());
	}

	/**
	 * Get all enabled modules
	 * @returns Array of enabled modules
	 */
	getEnabled(): Module[] {
		return this.getAll().filter((m) => m.enabled);
	}

	/**
	 * Enable a module
	 * @param moduleId - Module ID
	 * @throws Error if module not found
	 */
	async enable(moduleId: string): Promise<void> {
		const module = this.modules.get(moduleId);
		if (!module) {
			throw new Error(`Module "${moduleId}" not found`);
		}

		if (module.enabled) {
			console.warn(`Module "${moduleId}" is already enabled`);
			return;
		}

		await module.init();
		module.enabled = true;
	}

	/**
	 * Disable a module
	 * @param moduleId - Module ID
	 * @throws Error if module not found
	 */
	async disable(moduleId: string): Promise<void> {
		const module = this.modules.get(moduleId);
		if (!module) {
			throw new Error(`Module "${moduleId}" not found`);
		}

		if (!module.enabled) {
			console.warn(`Module "${moduleId}" is already disabled`);
			return;
		}

		await module.destroy();
		module.enabled = false;
	}

	/**
	 * Initialize all modules marked for auto-init
	 */
	async initializeAll(): Promise<void> {
		const autoInitIds = this.config.autoInit || [];

		for (const moduleId of autoInitIds) {
			try {
				await this.enable(moduleId);
			} catch (error) {
				console.error(`Failed to initialize module "${moduleId}":`, error);
			}
		}
	}

	/**
	 * Destroy all enabled modules
	 */
	async destroyAll(): Promise<void> {
		const enabled = this.getEnabled();

		for (const module of enabled) {
			try {
				await this.disable(module.id);
			} catch (error) {
				console.error(`Failed to destroy module "${module.id}":`, error);
			}
		}
	}

	/**
	 * Check if a module is registered
	 * @param moduleId - Module ID
	 * @returns True if module is registered
	 */
	has(moduleId: string): boolean {
		return this.modules.has(moduleId);
	}

	/**
	 * Get module count
	 * @returns Number of registered modules
	 */
	size(): number {
		return this.modules.size;
	}
}

// Export singleton instance
export const moduleRegistry = new ModuleRegistry();
