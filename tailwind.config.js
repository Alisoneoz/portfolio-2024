/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'fade-in': 'fade-in 3s ease-in-out forwards',
  			title: 'title 3s ease-out forwards',
  			'fade-left': 'fade-left 3s ease-in-out forwards',
  			'fade-right': 'fade-right 3s ease-in-out forwards',
  			glow: 'glow 3s ease-in-out forwards'
  		},
  		keyframes: {
  			glow: {
  				'0%': {
  					opacity: '0',
  					'animation-timing-function': 'cubic-bezier(0.74,0.25,0.76,1)'
  				},
  				'10%': {
  					opacity: '1',
  					'animation-timing-function': 'cubic-bezier(0.12,0.01,0.08,0.99)'
  				},
  				'100%': {
  					opacity: '0.3'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0%'
  				},
  				'75%': {
  					opacity: '0%'
  				},
  				'100%': {
  					opacity: '100%'
  				}
  			},
  			'fade-left': {
  				'0%': {
  					transform: 'translateX(100%)',
  					opacity: '0%'
  				},
  				'30%': {
  					transform: 'translateX(0%)',
  					opacity: '100%'
  				},
  				'100%': {
  					opacity: '0%'
  				}
  			},
  			'fade-right': {
  				'0%': {
  					transform: 'translateX(-100%)',
  					opacity: '0%'
  				},
  				'30%': {
  					transform: 'translateX(0%)',
  					opacity: '100%'
  				},
  				'100%': {
  					opacity: '0%'
  				}
  			},
  			title: {
  				'0%': {
  					'line-height': '0%',
  					'letter-spacing': '0.25em',
  					opacity: '0'
  				},
  				'25%': {
  					'line-height': '0%',
  					opacity: '0%'
  				},
  				'80%': {
  					opacity: '100%'
  				},
  				'100%': {
  					'line-height': '100%',
  					opacity: '100%'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
