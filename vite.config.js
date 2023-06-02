import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
    root: path.join(__dirname, 'src'),
    plugins: [
        sassGlobImports()
    ]
});
