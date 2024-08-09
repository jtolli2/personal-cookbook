/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
    build: {
        target: ['es2022'],
    },
    resolve: {
        mainFields: ['module'],
    },
    plugins: [
        analog({
            vite: {
                // Somehow breaks imports for ngModules like CommonModule
                // experimental: { supportAnalogFormat: true },
            },
            prerender: {
                routes: [],
                // discover: true
            },
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['src/test-setup.ts'],
        include: ['**/*.spec.ts'],
        reporters: ['default'],
    },
    define: {
        'import.meta.vitest': mode !== 'production',
    },
}));
