import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			highlight: {
				alias: { js: 'javascript', ts: 'typescript' }
			}
		})
	],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx']
};

export default config;
