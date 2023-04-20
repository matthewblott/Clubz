import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: '../Clubz/wwwroot',
			assets: '../Clubz/wwwroot',
			fallback: 'index.html',
			precompress: false
		})
	}
}

export default config
