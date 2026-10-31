<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.css';
	import { page } from '$app/state';
	import { asset, resolve } from '$app/paths';
	import favicon from '../lib/assets/favicon.svg';
	import SocialLinks from '../lib/components/SocialLinks.svelte';
	import { site } from '../lib/config';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const nav = [{ href: '/projects', label: 'Projects' }] as const;

	const isActive = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);

	const currentSection = $derived(nav.find((item) => isActive(item.href))?.label);

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
</svelte:head>

<div class="shell">
	<header class="site-header">
		<div class="brand">
			<a class="wordmark" href={resolve('/')}>{site.name}</a>
			{#if currentSection}
				<span class="section" aria-hidden="true">/{currentSection}</span>
			{/if}
		</div>

		<nav aria-label="Primary">
			{#each nav as item (item.href)}
				<a
					href={resolve(item.href)}
					class:active={isActive(item.href)}
					aria-current={isActive(item.href) ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}
			<a href={asset(site.cv)} target="_blank" rel="noopener" aria-label="View CV (PDF)">CV</a>
		</nav>
	</header>

	<main class="site-main" class:home={page.url.pathname === '/'}>
		{@render children()}
	</main>

	<footer class="site-footer">
		<SocialLinks />
		<div class="footer-meta">
			<a href={asset(site.cv)} target="_blank" rel="noopener" aria-label="View CV (PDF)">CV</a>
			<p>© {year} {site.name}</p>
		</div>
	</footer>
</div>

<style>
	.shell {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 42rem;
		min-height: 100svh;
		margin-inline: auto;
		padding-inline: 1.5rem;
	}

	.site-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding-block: 2rem;
	}

	.brand {
		display: flex;
		align-items: baseline;
		gap: 0.4375rem;
	}

	.wordmark {
		font-size: 0.9375rem;
		font-weight: 500;
		letter-spacing: -0.015em;
	}

	.section {
		font-family: var(--font-mono);
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--muted);
	}

	nav {
		display: flex;
		gap: 1.25rem;
		font-size: 0.875rem;
		color: var(--muted);
	}

	nav a {
		transition: color 150ms ease;
	}

	nav a:hover,
	nav a.active {
		color: var(--foreground);
	}

	.site-main {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding-block: clamp(2rem, 8vh, 4.5rem) 6rem;
	}

	.site-main.home {
		justify-content: center;
		padding-block: 3rem;
	}

	.site-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding-block: 1.5rem 2rem;
		border-top: 1px solid var(--border);
		font-size: 0.8125rem;
		color: var(--muted);
	}

	.footer-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.footer-meta a {
		transition: color 150ms ease;
	}

	.footer-meta a:hover {
		color: var(--foreground);
	}

	@media (max-width: 30rem) {
		.shell {
			padding-inline: 1.25rem;
		}

		.site-header {
			padding-block: 1.5rem;
		}
	}
</style>
