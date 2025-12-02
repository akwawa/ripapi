<script lang="ts">
	import '../app.css';

	// Design system tokens loaded globally
	let { children } = $props();
</script>

<svelte:head>
	<title>RipApi - API Testing Tool</title>
</svelte:head>

<div class="app">
	{@render children()}
</div>

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(:root) {
		/* Colors - Light mode */
		--color-bg-primary: #ffffff;
		--color-bg-secondary: #f5f5f7;
		--color-bg-tertiary: #e8e8ed;
		--color-text-primary: #1d1d1f;
		--color-text-secondary: #6e6e73;
		--color-text-tertiary: #86868b;
		--color-border: #d2d2d7;
		--color-border-hover: #b0b0b5;

		/* Accent colors */
		--color-primary: #0071e3;
		--color-primary-hover: #0077ed;
		--color-primary-active: #006edb;
		--color-success: #30d158;
		--color-warning: #ff9f0a;
		--color-error: #ff3b30;
		--color-info: #5e5ce6;

		/* Focus */
		--color-focus: #0071e3;
		--focus-ring-width: 2px;
		--focus-ring-offset: 2px;

		/* Spacing */
		--spacing-xs: 0.25rem;
		--spacing-sm: 0.5rem;
		--spacing-md: 1rem;
		--spacing-lg: 1.5rem;
		--spacing-xl: 2rem;
		--spacing-2xl: 3rem;

		/* Typography */
		--font-family-base:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		--font-family-mono:
			'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;

		--font-size-xs: 0.75rem;
		--font-size-sm: 0.875rem;
		--font-size-base: 1rem;
		--font-size-md: 1.125rem;
		--font-size-lg: 1.25rem;
		--font-size-xl: 1.5rem;
		--font-size-2xl: 2rem;

		--font-weight-normal: 400;
		--font-weight-medium: 500;
		--font-weight-semibold: 600;
		--font-weight-bold: 700;

		--line-height-tight: 1.25;
		--line-height-normal: 1.5;
		--line-height-relaxed: 1.75;

		/* Borders */
		--radius-sm: 0.25rem;
		--radius-md: 0.5rem;
		--radius-lg: 0.75rem;
		--radius-xl: 1rem;
		--radius-full: 9999px;

		/* Shadows */
		--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

		/* Transitions */
		--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
		--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
		--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

		/* Z-index */
		--z-dropdown: 1000;
		--z-sticky: 1020;
		--z-fixed: 1030;
		--z-modal-backdrop: 1040;
		--z-modal: 1050;
		--z-popover: 1060;
		--z-tooltip: 1070;
	}

	/* Dark mode */
	:global([data-theme='dark']) {
		--color-bg-primary: #1d1d1f;
		--color-bg-secondary: #2c2c2e;
		--color-bg-tertiary: #3a3a3c;
		--color-text-primary: #f5f5f7;
		--color-text-secondary: #a1a1a6;
		--color-text-tertiary: #8e8e93;
		--color-border: #48484a;
		--color-border-hover: #636366;

		--color-primary: #0a84ff;
		--color-primary-hover: #409cff;
		--color-primary-active: #0077ed;
		--color-success: #32d74b;
		--color-warning: #ff9f0a;
		--color-error: #ff453a;
		--color-info: #5e5ce6;
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--color-bg-primary: #1d1d1f;
			--color-bg-secondary: #2c2c2e;
			--color-bg-tertiary: #3a3a3c;
			--color-text-primary: #f5f5f7;
			--color-text-secondary: #a1a1a6;
			--color-text-tertiary: #8e8e93;
			--color-border: #48484a;
			--color-border-hover: #636366;

			--color-primary: #0a84ff;
			--color-primary-hover: #409cff;
			--color-primary-active: #0077ed;
			--color-success: #32d74b;
			--color-warning: #ff9f0a;
			--color-error: #ff453a;
			--color-info: #5e5ce6;
		}
	}

	:global(body) {
		font-family: var(--font-family-base);
		font-size: var(--font-size-base);
		line-height: var(--line-height-normal);
		color: var(--color-text-primary);
		background-color: var(--color-bg-primary);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-weight: var(--font-weight-semibold);
		line-height: var(--line-height-tight);
	}

	:global(a) {
		color: var(--color-primary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	:global(a:hover) {
		color: var(--color-primary-hover);
	}

	:global(a:focus-visible) {
		outline: var(--focus-ring-width) solid var(--color-focus);
		outline-offset: var(--focus-ring-offset);
		border-radius: var(--radius-sm);
	}

	:global(button, input, select, textarea) {
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
	}

	:global(button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible) {
		outline: var(--focus-ring-width) solid var(--color-focus);
		outline-offset: var(--focus-ring-offset);
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
