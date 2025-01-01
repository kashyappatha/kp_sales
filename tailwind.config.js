/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	container: {
  		padding: {
  			DEFAULT: '15px'
  		}
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '960px',
  		xl: '1200px'
  	},
  	extend: {
  		colors: {
  			primary: '#131424',
  			secondary: '#393A47',
  			accent: '#F13024'
  		},
  		backgroundImage: {
  			explosion: 'url("/bg-explosion.png")',
  			circles: 'url("/bg-circles.png")',
  			circleStar: 'url("/circle-star.svg")',
  			site: 'url("/site-bg.svg")'
  		},
  		animation: {
  			'spin-slow': 'spin 6s linear infinite',
  			meteor: 'meteor 5s linear infinite',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		},
  		fontFamily: {
  			poppins: [
  				'`var(--font-poppins)`',
  				'sans-serif'
  			],
  			sora: [
  				'`var(--font-sora)`',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			}
  		}
  	}
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

