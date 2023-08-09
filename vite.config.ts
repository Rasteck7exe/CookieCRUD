import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $primary: #636B97; 
        $secondary: #3F4365; 
        $light: #2B304D;
        $dark: #151D2F;
        $text:#EEAA74; 

        $text-gray: (
          50: #f9fafb,
          100: #f4f5f7,
          200: #e5e7eb,
          300: #d2d6dc,
          400: #9fa6b2,
          500: #6b7280,
          600: #4b5563,
          700: #374151,
          800: #252f3f,
          900: #161e2e
        );
        `,
      },
    },
  },
});
