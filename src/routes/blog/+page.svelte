<script lang="ts">
	import Meta from '../../lib/components/Meta.svelte';
</script>

<Meta title="Blog" description="Notes and writing by Daniel George." />

<div class="page">
	<header class="page-header">
		<h1>Blog</h1>
		<p>Notes on what I'm building and learning.</p>
	</header>

	<!-- TODO: add blog posts and post routes here. -->
	<p class="empty">No posts yet. The first one is on its way.</p>
</div>

<style>
	.page-header {
		padding-bottom: 2.5rem;
	}

	h1 {
		margin-bottom: 0.875rem;
		font-size: clamp(1.75rem, 1.5rem + 1vw, 2.25rem);
	}

	.page-header p {
		max-width: 36ch;
		color: var(--muted);
	}

	.empty {
		padding-top: 1.5rem;
		border-top: 1px solid var(--border);
		font-size: 0.9375rem;
		color: var(--muted);
	}
</style>
