import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';

interface VitestConfigExport extends UserConfig {
    test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/react-testing-app/',
    test: {
        port: 3000,
        environment: 'jsdom',
        globals: true,
        transformMode: {
            web: [/\.[jt]sx?$/],
        },
        setupFiles: './src/setupVitest.ts',
        css: true,
    },
} as VitestConfigExport);
