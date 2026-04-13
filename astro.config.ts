import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    output: 'static',
    build: {
        assets: 'assets',
    },
    vite: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        plugins: [tailwindcss() as any],
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
