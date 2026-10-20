<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const nav = [
		{ href: '/', label: 'HOME' },
		{ href: '/characters', label: 'CHARS' },
		{ href: '/rules', label: 'RULES' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>CYBRDEK</title>
</svelte:head>

<div class="shell">
	<nav>
		<span class="brand">CYBRDEK://</span>
		{#each nav as item (item.href)}
			<a href={item.href} class:active={page.url.pathname === item.href}>{item.label}</a>
		{/each}
	</nav>

	<main>
		{@render children()}
	</main>
</div>

<style>
	.shell {
		max-width: 960px;
		margin: 0 auto;
		padding: 1rem;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: baseline;
		border-bottom: 1px solid var(--border);
		padding-bottom: 0.5rem;
		margin-bottom: 1rem;
		font-family: var(--font-display);
		font-size: 1.4rem;
	}

	.brand {
		color: var(--accent);
		margin-right: auto;
	}

	nav a {
		text-decoration: none;
	}

	nav a.active::before {
		content: '>';
	}
</style>
