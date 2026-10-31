<script lang="ts">
	import Meta from '../../lib/components/Meta.svelte';
	import { personalProjects, workExperience } from '../../lib/data/projects';

	const sections = [
		{ id: 'work-experience', title: 'Work experience', projects: workExperience },
		{ id: 'personal-projects', title: 'Personal projects', projects: personalProjects }
	];
</script>

<Meta
	title="Projects"
	description="Work experience and personal projects by Daniel George, a second-year undergraduate at Cardiff University."
/>

<div class="page">
	<h1 class="visually-hidden">Projects</h1>

	{#each sections as section (section.id)}
		<section aria-labelledby={section.id}>
			<h2 id={section.id}>{section.title}</h2>

			<ul class="projects">
				{#each section.projects as project (project.name)}
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
							{#if project.meta}
								<span class="project-meta">{project.meta}</span>
							{/if}
							<span class="project-description">{project.description}</span>
						</svelte:element>
					</li>
				{/each}
			</ul>
		</section>
	{/each}
</div>

<style>
	section + section {
		margin-top: 4rem;
	}

	h2 {
		margin-bottom: 1.125rem;
		font-size: 1.375rem;
		font-weight: 500;
		letter-spacing: -0.02em;
		color: var(--foreground);
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
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding-block: 1.25rem;
	}

	.project-heading {
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

	.project-meta {
		font-size: 0.8125rem;
		color: var(--muted);
	}

	.project-description {
		font-size: 0.9375rem;
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
</style>
