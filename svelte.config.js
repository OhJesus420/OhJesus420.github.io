import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html',
			pages: 'docs',
			assets: 'docs',
		}),prerender: { entries: [] }
	}
};

export default config;

