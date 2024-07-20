/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{html,ts,md}'],
    darkMode: [
        'variant',
        [
            '@media (prefers-color-scheme: dark) { &:not(.light *) }',
            '&:is(.dark *)',
        ],
    ],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/cooking-light.jpg')",
            },
            colors: {
                // dark: '#212529',
                // light: '#f8f9fa',
                // primary: '#007bff',
                // success: '#28a745',
                // danger: '#dc3545',
                // warning: '#ffc107',
                // info: '#17a2b8',
                // secondary: '#6c757d',
                // 'dark-soft': '#343a40',
                // 'light-soft': '#f8f9fa',
                // 'tint-light': '#f1f3f5',
                'tint-dark': '#646cff',
                'tint-dark-soft': '#535bf2',
            },
        },
    },
    plugins: [],
};
