import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    unocss(),
    sveltekit(),
    CustomHmr()
  ]
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