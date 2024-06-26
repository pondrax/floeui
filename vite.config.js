import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'node:path'
import unocss from 'unocss/vite'
import { readFileSync } from 'fs';

const CONFIG = JSON.parse(readFileSync('./package.json', 'utf8'));

// console.log(path.resolve("/src/(docs)/lib"))
export default defineConfig({
  plugins: [
    unocss(),
    sveltekit(),
    CustomHmr()
  ],
  define: {
    CONFIG
  },
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