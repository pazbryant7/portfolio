import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
    const repoName = 'portfolio';
    const isProduction = command === 'build';
    return {
        plugins: [react()],
        server: {
            port: 3000,
        },
        preview: {
            port: 8080,
        },
        base: isProduction ? `/${repoName}/` : '/',
    };
});
