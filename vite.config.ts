import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite'

export default defineConfig({
	plugins: [UnoCSS(), sveltekit(),],
	define: {
		__BUILD_TIMESTAMP__: JSON.stringify(Math.floor(Date.now() / 1000))
	}
});
