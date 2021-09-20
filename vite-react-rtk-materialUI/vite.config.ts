import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import eslintPlugin from 'vite-plugin-eslint';
import reactJsx from 'vite-react-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), eslintPlugin(), reactJsx()],
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: '/src',
      },
    ],
  },
});
