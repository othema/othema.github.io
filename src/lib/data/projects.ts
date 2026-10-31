export interface Project {
	name: string;
	description: string;
	language: string;
	href?: string;
}

/**
 * Curated list shown on /projects.
 * Edit or reorder these entries to change the page.
 */
export const projects: Project[] = [
	{
		name: 'c-chess',
		description: 'A chess engine and full app made in C.',
		language: 'C',
		href: 'https://github.com/othema/c-chess'
	},
	{
		name: 'command-ai',
		description: 'A GitHub Copilot-style assistant for the command line.',
		language: 'Python',
		href: 'https://github.com/othema/command-ai'
	},
	{
		name: 'creature-walking-py',
		description: 'A reinforcement learning creature walking simulation.',
		language: 'Python',
		href: 'https://github.com/othema/creature-walking-py'
	},
	{
		name: 'tunemix',
		description: 'A music playlist generator.',
		language: 'TypeScript',
		href: 'https://github.com/othema/tunemix'
	},
	{
		name: 'termaudio',
		description: 'A simple YouTube audio player for the Linux terminal.',
		language: 'Python',
		href: 'https://github.com/othema/termaudio'
	},
	{
		name: 'tamburini',
		description: 'A website for Alex Tamburini.',
		language: 'Svelte',
		href: 'https://github.com/othema/tamburini'
	}
];
