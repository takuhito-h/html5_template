import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import viteImagemin from 'vite-plugin-imagemin';
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
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 20,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
        })
    ],
    build: {
        emptyOutDir: true,
        outDir: path.join(__dirname, 'public'),
        rollupOptions: {
            input: fastGlob.sync(
                ['src/*.html', 'src/pages/**/*.html'],
                { dot: false }
            ),
        },
    },
});
