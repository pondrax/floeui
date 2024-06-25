import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'node:path'
import unocss from 'unocss/vite'

// console.log(path.resolve("/src/(docs)/lib"))
export default defineConfig({
  plugins: [
    unocss(),
    sveltekit(),
    CustomHmr()
  ],
  resolve: {
    alias: {
      $components: path.resolve("/src/routes/(docs)/lib"),
    },
  },
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