<script lang="ts">
	import Meta from '../../lib/components/Meta.svelte';
</script>

<Meta title="Blog" description="Notes and writing by Daniel George." />

<div class="page">
	<h1 class="visually-hidden">Blog</h1>

	<!-- TODO: add blog posts and post routes here. -->
	<p class="empty">No posts yet. The first one is on its way.</p>
</div>

<style>
	.empty {
		padding-top: 1.5rem;
		border-top: 1px solid var(--border);
		font-size: 0.9375rem;
		color: var(--muted);
	}
</style>
