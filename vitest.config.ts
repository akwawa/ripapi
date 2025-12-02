import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['tests/unit/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html', 'lcov'],
			exclude: [
				'node_modules/**',
				'.svelte-kit/**',
				'build/**',
				'tests/**',
				'**/*.config.{js,ts}',
				'**/types.ts'
			]
			// TODO: Re-enable thresholds once we have more tests
			// thresholds: {
			//   lines: 80,
			//   functions: 80,
			//   branches: 80,
			//   statements: 80
			// }
		}
	}
});
