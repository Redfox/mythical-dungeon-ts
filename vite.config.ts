import * as dotenv from 'dotenv'
import { defineConfig } from 'vite';
import replace from '@rollup/plugin-replace';

dotenv.config()

export default defineConfig({
  server: {
    port: Number(process.env.PORT)
  },
  build: {
    rollupOptions: {
      plugins: [
        //  Toggle the booleans here to enable / disable Phaser 3 features:
        replace({
          'typeof CANVAS_RENDERER': "'true'",
          'typeof WEBGL_RENDERER': "'true'",
          'typeof EXPERIMENTAL': "'true'",
          'typeof PLUGIN_CAMERA3D': "'false'",
          'typeof PLUGIN_FBINSTANT': "'false'",
          'typeof FEATURE_SOUND': "'true'"
        })
      ]
    }
  }
});