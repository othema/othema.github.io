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
		name: 'Reinforcement Learning Creature Walking Simulation',
		description:
			'A custom neural network that maps joint positions and velocities to muscle actions, trained to walk in a 2D rigid-body physics environment. Built with TensorFlow, Pygame and Pymunk.',
		language: 'Python, TensorFlow',
		href: 'https://github.com/othema/creature-walking-py'
	},
	{
		name: 'AI/Multiplayer Chess Game',
		description:
			'A chess engine in C with local multiplayer and an AI opponent, powered by Stockfish over the UCI protocol. The interface is built with SDL2 and microui.',
		language: 'C, Stockfish',
		href: 'https://github.com/othema/c-chess'
	},
	{
		name: 'Abehub',
		description:
			'A school-wide social network with authentication, posts, likes and follows. Built with Flask and SQLite, it onboarded 250+ real users.',
		language: 'Python, Flask',
		// Public repo is the later Abehub revival; the original Flask code is not public.
		href: 'https://github.com/othema/abehub2'
	},
	{
		name: 'Hawk-Dove Simulation',
		description:
			'An evolutionary game theory simulation of hawk-dove dynamics, visualised with Matplotlib to show stable strategies and population changes over 1000+ generations.',
		language: 'Python, Matplotlib'
	}
];
