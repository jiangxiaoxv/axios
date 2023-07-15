import { defineConfig } from 'vite'
import vuejs from '@vitejs/plugin-vue'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      // key + 描述对象
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  plugins: [
    vuejs(),
    eslintPlugin({
      cache: false,
      include: [
        './**/*.js',
        './**/*.vue',
        './**/*.html',
        './**/*.css',
        './**/*.jsx',
      ],
      exclude: ['./node_modules/**'],
    }),
  ],
})
