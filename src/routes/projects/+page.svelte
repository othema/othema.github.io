<script lang="ts">
	import Meta from '../../lib/components/Meta.svelte';
	import { projects } from '../../lib/data/projects';
	import { site } from '../../lib/config';
</script>

<Meta
	title="Projects"
	description="Selected projects by Daniel George, a second-year undergraduate at Cardiff University."
/>

<div class="page">
	<header class="page-header">
		<h1>Projects</h1>
		<p>
			A few things I've built. More on <a
				class="text-link"
				href={site.github}
				target="_blank"
				rel="external noreferrer">GitHub</a
			>.
		</p>
	</header>

	<ul class="projects">
		{#each projects as project (project.name)}
			<li>
				<svelte:element
					this={project.href ? 'a' : 'div'}
					href={project.href}
					target={project.href ? '_blank' : undefined}
					rel={project.href ? 'external noreferrer' : undefined}
					class="project"
				>
					<span class="project-heading">
						<span class="project-name">{project.name}</span>
						{#if project.href}
							<span class="project-arrow" aria-hidden="true">↗</span>
						{/if}
					</span>
					<span class="project-description">{project.description}</span>
					<span class="project-language">{project.language}</span>
				</svelte:element>
			</li>
		{/each}
	</ul>
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

	.projects {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.projects li {
		border-top: 1px solid var(--border);
	}

	.projects li:last-child {
		border-bottom: 1px solid var(--border);
	}

	.project {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-areas:
			'heading language'
			'description language';
		column-gap: 1.5rem;
		row-gap: 0.25rem;
		padding-block: 1.25rem;
	}

	.project-heading {
		grid-area: heading;
		display: flex;
		align-items: center;
		gap: 0.375rem;
	}

	.project-name {
		font-size: 1.0625rem;
		font-weight: 450;
		letter-spacing: -0.015em;
	}

	.project-arrow {
		color: var(--muted);
		opacity: 0;
		transform: translate(-0.25rem, 0.25rem);
		transition:
			opacity 150ms ease,
			transform 150ms ease;
	}

	.project-description {
		grid-area: description;
		font-size: 0.9375rem;
		color: var(--muted);
	}

	.project-language {
		grid-area: language;
		align-self: center;
		font-size: 0.75rem;
		color: var(--muted);
	}

	.projects a:hover .project-name {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 4px;
	}

	.projects a:hover .project-arrow {
		opacity: 1;
		transform: translate(0, 0);
	}

	@media (max-width: 30rem) {
		.project {
			grid-template-columns: 1fr;
			grid-template-areas:
				'heading'
				'description'
				'language';
			row-gap: 0.375rem;
		}

		.project-language {
			justify-self: start;
		}
	}
</style>
