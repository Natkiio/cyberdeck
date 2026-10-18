<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children }: { title?: string; children: Snippet } = $props();
</script>

<section class="panel">
	{#if title}
		<header>[ {title} ]</header>
	{/if}
	{@render children()}
</section>

<style>
	.panel {
		border: 1px solid var(--border);
		background: var(--panel);
		padding: 1rem;
		margin-bottom: 1rem;
	}

	header {
		font-family: var(--font-display);
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}
</style>
