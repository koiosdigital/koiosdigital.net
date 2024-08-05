import type { Config } from 'tailwindcss'


export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef9ec',
          100: '#fcf0c9',
          200: '#f8df8f',
          300: '#f4c955',
          400: '#f2b42d',
          500: '#e79114',
          600: '#d06f0f',
          700: '#ad4e10',
          800: '#8c3d14',
          900: '#733314',
          950: '#421906',
        }
      }
    }
  }
}