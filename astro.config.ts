import { defineConfig } from 'astro/config';
import sassGlobImport from 'vite-plugin-sass-glob-import';

export default defineConfig({
    output: 'static',
    build: {
        assets: 'assets',
    },
    vite: {
        plugins: [sassGlobImport()],
        css: {
            preprocessorOptions: {
                scss: {
                    // node_modules を Sass の読み込みパスに追加
                    loadPaths: ['node_modules'],
                },
            },
        },
    },
});
