import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: '#000',
                    100: '#000319'
                }
            },
        },
    },
    plugins: [],
}

export default config