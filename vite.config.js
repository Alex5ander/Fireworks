import { defineConfig } from 'vite';

export default defineConfig({
  base: "./",
  build: {
    minify: true,
    rollupOptions: {
      input: {
        main: './index.html',
        "2022": './2022/index.html',
        "2023": './2023/index.html',
        "2024": './2024/index.html'
      },
    },
  },
});