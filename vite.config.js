import { defineConfig } from 'vite';
import nunjucks from '@vituum/vite-plugin-nunjucks';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import fastGlob from 'fast-glob';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
    root: path.join(__dirname, 'src'),
    publicDir: path.join(__dirname, 'copy'),
    plugins: [
        sassGlobImports(),
        nunjucks({
            filetypes: {
                html: /.(html|njk|njk.html)$/,
            },
        }),
    ],
    build: {
        emptyOutDir: true,
        outDir: path.join(__dirname, 'public'),
        rollupOptions: {
            input: fastGlob.sync(['src/*.html', 'src/pages/**/*.html'], { dot: false }),
        },
    },
});
