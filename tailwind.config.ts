import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'black': {
                    'DEFAULT': '#000',
                    '100': '#000319',
                },
            },
            screens: {
                'xs': '400px',
                'mobile': {'max': '399px'},
            },
        },
    },
    plugins: [],
}

export default config