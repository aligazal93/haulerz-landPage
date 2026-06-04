/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
        "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
        "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
                sm: "15px",
                md: "15px",
                lg: "15px",
                xl: "15px",
                "2xl": "15px",
            },
        },
        screens: {
            sm: "540px",
            md: "720px",
            lg: "990px",
            xl: "1240px",
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-ibm)", "sans-serif"],
            },
            fontSize: {
                "custom32": "32px",
                "custom30": "30px",
                "custom28": "28px",
                "custom24": "24px",
                "custom22": "22px",
                "custom20": "20px",
                "custom18": "18px",
                "custom16": "16px",
                "custom14": "14px",
                "custom12": "12px",
                "custom10": "10px",
            },
            colors: {
                primary: "#FFBF44",
                secondary: "#121212",
                link: "#316BDB"
            },
            keyframes: {
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)'
                    }
                },
                softBounce: {
                    '0%, 100%': {
                        transform: 'translateY(0)'
                    },
                    '50%': {
                        transform: 'translateY(10px)'
                    },
                },
                slideInLeft: {
                    '0%': {
                        transform: 'translateX(-100%)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateX(0)',
                        opacity: '1'
                    },
                },
                fadeInUp: {
                    '0%': {
                        transform: 'translateY(40px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    },
                },
            },
            animation: {
                slideInLeft: 'slideInLeft 0.9s ease-out',
                fadeInUp: 'fadeInUp 0.9s ease-out',
                softBounce: 'softBounce 1.5s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};