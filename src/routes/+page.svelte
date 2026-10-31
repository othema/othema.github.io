<script lang="ts">
	import Meta from '../lib/components/Meta.svelte';
</script>

<Meta />

<h1 class="visually-hidden">Daniel George</h1>

<p class="intro">
	I'm Daniel George, a second-year undergraduate at Cardiff University. I build software, and this
	is where I keep the things I'm working on.
</p>

<style>
	.intro {
		max-width: 30ch;
		font-size: clamp(1.5rem, 1.2rem + 1.4vw, 1.875rem);
		line-height: 1.45;
		letter-spacing: -0.03em;
	}
</style>
