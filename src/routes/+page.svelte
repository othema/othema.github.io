<script lang="ts">
	import { asset } from '$app/paths';
	import Meta from '../lib/components/Meta.svelte';
	import { site } from '../lib/config';
</script>

<Meta />

<h1 class="visually-hidden">Daniel George</h1>

<div class="hero">
	<img class="avatar" src={asset('me-avatar.webp')} alt="Daniel George" width="384" height="384" />

	<p class="intro">
		I'm Daniel George, a second-year undergraduate at Cardiff University. I build software, and this
		is where I keep the things I'm working on.
	</p>

	<a
		class="cv-button"
		href={asset(site.cv)}
		target="_blank"
		rel="noopener"
		aria-label="View CV (PDF)"
	>
		View CV
		<span class="arrow" aria-hidden="true">↗</span>
	</a>
</div>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.75rem;
		transform: translateY(-3rem);
	}

	.avatar {
		width: 15rem;
		max-width: 100%;
		height: auto;
		aspect-ratio: 1;
		border: 1px solid var(--border);
		border-radius: 50%;
		object-fit: cover;
	}

	.intro {
		max-width: 30ch;
		font-size: clamp(1.5rem, 1.2rem + 1.4vw, 1.875rem);
		line-height: 1.45;
		letter-spacing: -0.03em;
	}

	.cv-button {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		padding-block: 0.5rem;
		border-bottom: 1px solid var(--foreground);
		font-family: var(--font-mono);
		font-size: 0.875rem;
		font-weight: 500;
		letter-spacing: 0;
		text-transform: uppercase;
		color: var(--foreground);
		transition:
			color 150ms ease,
			border-color 150ms ease;
	}

	.cv-button:hover {
		border-color: var(--muted);
		color: var(--muted);
	}

	.cv-button:focus-visible {
		outline: 2px solid var(--foreground);
		outline-offset: 4px;
	}

	.arrow {
		font-size: 0.8125rem;
	}
</style>
