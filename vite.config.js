import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import inlangPlugin from '@inlang/sdk-js/adapter-sveltekit';
import unocss from 'unocss/vite';

export default defineConfig({
	plugins: [inlangPlugin(), unocss(), sveltekit(), CustomHmr()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

function CustomHmr() {
	return {
		name: 'custom-hmr',
		enforce: 'post',
		// HMR
		handleHotUpdate({ file, server }) {
			if (file.includes('/src/lib')) {
				console.log(file, 'Full reload');
				server.restart();
				// server.ws.send({
				//   type: 'full-reload',
				//   path: '*'
				// });
			}
		}
	};
}
