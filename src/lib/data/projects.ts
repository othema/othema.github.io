export interface Project {
	name: string;
	description: string;
	meta?: string;
	href?: string;
}

/**
 * Entries shown on /projects.
 * Edit or reorder these lists to change the page.
 */
export const workExperience: Project[] = [
	{
		name: 'Last Minute Hospitality Ltd',
		meta: 'Full Stack Developer · Oct 2025 – Dec 2025',
		description:
			'Built a SvelteKit and TailwindCSS app connecting local businesses with Ukrainian immigrants for urgent short-term work. PocketBase handled auth, bookings and employee data, cutting placement time by around 60%.'
	},
	{
		name: 'Sweet Passion Cakes',
		meta: 'Web Developer · Jun 2023 – May 2026',
		description:
			'Rebuilt the shop with SvelteKit and TailwindCSS, automating manual email orders and raising online sales by 24.3% in three months. A Vercel Edge Config admin panel handles afternoon tea bookings and site notices.'
	}
];

export const personalProjects: Project[] = [
	{
		name: 'Reinforcement Learning Creature Walking Simulation',
		description:
			'A neural network that maps joint positions and velocities to muscle actions, trained to walk in a 2D rigid-body physics environment. Built with Python, TensorFlow, Pygame and Pymunk.',
		href: 'https://github.com/othema/creature-walking-py'
	},
	{
		name: 'AI/Multiplayer Chess Game',
		description:
			'A chess engine in C with local multiplayer and a Stockfish AI opponent over UCI. The interface uses SDL2 and microui.',
		href: 'https://github.com/othema/c-chess'
	},
	{
		name: 'Abehub',
		description:
			'A school-wide social network with authentication, posts, likes and follows. Built with Python and Flask, it onboarded 250+ real users.',
		// Public repo is the later Abehub revival; the original Flask code is not public.
		href: 'https://github.com/othema/abehub2'
	},
	{
		name: 'Hawk-Dove Simulation',
		description:
			'A Python simulation of hawk-dove dynamics, visualised with Matplotlib to show stable strategies and population changes over 1000+ generations.',
		href: 'https://github.com/othema/hawk-dove-ess'
	}
];
