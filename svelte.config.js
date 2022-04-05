import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import HMR_HOST from '.gitpod.yml';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			server: {
				hmr: {
					clientPort: HMR_HOST ? 443: 3000,
					host: HMR_HOST ? HMR_HOST.substring("https://".length) : "localhost"
				}
			}
		}
	}
};

export default config;
