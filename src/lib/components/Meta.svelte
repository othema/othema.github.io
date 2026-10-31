<script lang="ts">
	import { site } from '../config';

	let { title, description = site.description }: { title?: string; description?: string } =
		$props();

	const fullTitle = $derived(title ? `${title} — ${site.name}` : site.name);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>
