import { describe, it, expect, beforeEach } from 'vitest';
import { moduleRegistry } from '$lib/core/module-registry';
import type { Module } from '$lib/core/types';

describe('ModuleRegistry', () => {
	// Mock module for testing
	const createMockModule = (id: string): Module => ({
		id,
		name: `Test Module ${id}`,
		version: '1.0.0',
		description: 'Test module',
		enabled: false,
		init: async () => {
			console.log(`${id} initialized`);
		},
		destroy: async () => {
			console.log(`${id} destroyed`);
		}
	});

	beforeEach(() => {
		// Clear registry before each test
		const allModules = moduleRegistry.getAll();
		allModules.forEach((module: Module) => {
			moduleRegistry.unregister(module.id);
		});
	});

	it('should register a module', () => {
		const module = createMockModule('test-1');
		moduleRegistry.register(module);

		expect(moduleRegistry.has('test-1')).toBe(true);
		expect(moduleRegistry.get('test-1')).toBe(module);
	});

	it('should throw error when registering duplicate module', () => {
		const module = createMockModule('test-1');
		moduleRegistry.register(module);

		expect(() => moduleRegistry.register(module)).toThrow();
	});

	it('should unregister a module', async () => {
		const module = createMockModule('test-1');
		moduleRegistry.register(module);

		await moduleRegistry.unregister('test-1');

		expect(moduleRegistry.has('test-1')).toBe(false);
	});

	it('should enable a module', async () => {
		const module = createMockModule('test-1');
		moduleRegistry.register(module);

		await moduleRegistry.enable('test-1');

		const retrieved = moduleRegistry.get('test-1');
		expect(retrieved?.enabled).toBe(true);
	});

	it('should disable a module', async () => {
		const module = createMockModule('test-1');
		moduleRegistry.register(module);

		await moduleRegistry.enable('test-1');
		await moduleRegistry.disable('test-1');

		const retrieved = moduleRegistry.get('test-1');
		expect(retrieved?.enabled).toBe(false);
	});

	it('should get all enabled modules', async () => {
		const module1 = createMockModule('test-1');
		const module2 = createMockModule('test-2');

		moduleRegistry.register(module1);
		moduleRegistry.register(module2);

		await moduleRegistry.enable('test-1');

		const enabled = moduleRegistry.getEnabled();
		expect(enabled).toHaveLength(1);
		expect(enabled[0].id).toBe('test-1');
	});

	it('should return correct size', () => {
		const module1 = createMockModule('test-1');
		const module2 = createMockModule('test-2');

		moduleRegistry.register(module1);
		moduleRegistry.register(module2);

		expect(moduleRegistry.size()).toBe(2);
	});
});
