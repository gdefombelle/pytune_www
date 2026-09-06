import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $lib: path.resolve('./src/lib'), 
      $icons: path.resolve('./static/assets/icons/'),
      // $app: 'node_modules/@sveltejs/kit/src/runtime'  
    }
  }
};

export default config;