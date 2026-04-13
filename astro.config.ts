import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'static',
    build: {
        assets: 'assets',
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // node_modules を Sass の読み込みパスに追加（sanitize.css 用）
                    loadPaths: ['node_modules'],
                },
            },
        },
    },
});
