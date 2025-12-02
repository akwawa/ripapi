<script lang="ts">
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>RipApi - Home</title>
</svelte:head>

<div class="container">
	<header class="header">
		<div class="logo">
			<h1>RipApi</h1>
			<p class="tagline">API Testing Made Simple</p>
		</div>
	</header>

	<main class="main">
		<div class="hero">
			<h2>Bienvenue sur RipApi</h2>
			<p>Application web modulaire et extensible pour interroger des API REST, GraphQL et SOAP</p>
		</div>

		{#if mounted}
			<div class="features">
				<div class="feature-card">
					<h3>🌐 Multi-protocoles</h3>
					<p>Support REST, GraphQL, et SOAP</p>
				</div>

				<div class="feature-card">
					<h3>🔐 Authentification extensible</h3>
					<p>SSO, Kerberos, OAuth, et plus</p>
				</div>

				<div class="feature-card">
					<h3>📚 Collections</h3>
					<p>Gérez et partagez vos collections d'API</p>
				</div>

				<div class="feature-card">
					<h3>♿ Accessibilité</h3>
					<p>Conforme RGAA AAA</p>
				</div>
			</div>
		{/if}

		<div class="status">
			<p><strong>Version:</strong> 0.0.0</p>
			<p><strong>Statut:</strong> En développement</p>
		</div>
	</main>

	<footer class="footer">
		<p>&copy; 2025 RipApi. Licence MIT.</p>
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: var(--spacing-md);
	}

	.header {
		text-align: center;
		padding: var(--spacing-2xl) 0;
		border-bottom: 1px solid var(--color-border);
	}

	.logo h1 {
		font-size: var(--font-size-2xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-primary);
		margin-bottom: var(--spacing-sm);
	}

	.tagline {
		color: var(--color-text-secondary);
		font-size: var(--font-size-md);
	}

	.main {
		flex: 1;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: var(--spacing-2xl) var(--spacing-md);
	}

	.hero {
		text-align: center;
		margin-bottom: var(--spacing-2xl);
	}

	.hero h2 {
		font-size: var(--font-size-xl);
		margin-bottom: var(--spacing-md);
	}

	.hero p {
		color: var(--color-text-secondary);
		font-size: var(--font-size-md);
		max-width: 600px;
		margin: 0 auto;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-2xl);
	}

	.feature-card {
		background: var(--color-bg-secondary);
		padding: var(--spacing-lg);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		transition:
			transform var(--transition-base),
			box-shadow var(--transition-base);
	}

	.feature-card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.feature-card h3 {
		font-size: var(--font-size-md);
		margin-bottom: var(--spacing-sm);
	}

	.feature-card p {
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
	}

	.status {
		text-align: center;
		padding: var(--spacing-xl);
		background: var(--color-bg-secondary);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
	}

	.status p {
		margin-bottom: var(--spacing-xs);
	}

	.footer {
		text-align: center;
		padding: var(--spacing-xl) 0;
		border-top: 1px solid var(--color-border);
		color: var(--color-text-secondary);
		font-size: var(--font-size-sm);
	}

	/* Accessibility */
	@media (prefers-reduced-motion: reduce) {
		.feature-card {
			transition: none;
		}

		.feature-card:hover {
			transform: none;
		}
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero h2 {
			font-size: var(--font-size-lg);
		}

		.features {
			grid-template-columns: 1fr;
		}
	}
</style>
