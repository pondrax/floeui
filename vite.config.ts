import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import unocss from 'unocss/vite';

import type { PluginOption } from "vite";


export default defineConfig({
  plugins: [
    CustomHmr(),
    // @ts-ignore
    unocss(),
    sveltekit(),
  ]
});

function CustomHmr(): PluginOption {
  return {
    name: 'custom-hmr',
    enforce: 'post',
    // HMR
    handleHotUpdate({ file, server }) {
      if (file.includes('/package')) {
        console.log(file, 'Full reload');
        server.restart()
        // server.ws.send({
        //   type: 'full-reload',
        //   path: '*'
        // });
      }
    },
  }
}