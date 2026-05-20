import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'inline-css',
        apply: 'build',
        closeBundle() {
          const htmlPath = path.resolve(__dirname, 'dist/index.html');
          if (!fs.existsSync(htmlPath)) return;
          let html = fs.readFileSync(htmlPath, 'utf-8');
          const match = html.match(/<link rel="stylesheet"[^>]*href="\.?\/([^"]+)"[^>]*>/);
          if (match) {
            const cssTag = match[0];
            const cssRelativePath = match[1];
            const cssPath = path.resolve(__dirname, 'dist', cssRelativePath);
            if (fs.existsSync(cssPath)) {
              const cssContent = fs.readFileSync(cssPath, 'utf-8');
              html = html.replace(cssTag, `<style>${cssContent}</style>`);
              fs.writeFileSync(htmlPath, html, 'utf-8');
              try {
                fs.unlinkSync(cssPath);
              } catch (e) {}
            }
          }
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
