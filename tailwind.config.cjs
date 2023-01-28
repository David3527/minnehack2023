const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    future: {
        hoverOnlyWhenSupported: true
    },
    theme: {
        extend: {
            colors: {
                gray: colors.neutral
            },
            borderColor: {
                DEFAULT: colors.neutral[200]
            },
            fontFamily: {
                // sans: ['ui-rounded', '"Nunito"', 'sans-serif']
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography')
    ]
};