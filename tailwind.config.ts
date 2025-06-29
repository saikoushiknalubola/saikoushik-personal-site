import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
				xl: '3rem',
				'2xl': '4rem',
			},
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				neon: {
					purple: '#8B5CF6',
					cyan: '#06B6D4',
					green: '#10B981',
				},
				apple: {
					blue: '#147EFB',
					gray: '#8A8A8A',
					light: '#F5F5F7',
          			dark: '#1D1D1F',
          			silver: '#A1A1A6'
				},
				future: {
					primary: '#00F0FF',
					secondary: '#7B42F6',
					accent: '#FF3864',
					dark: '#0A0A1A',
					light: '#E0F7FF'
				},
				slate: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			fontSize: {
				'2xs': ['0.625rem', { lineHeight: '0.75rem' }],
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},
			screens: {
				'xs': '475px',
				'3xl': '1600px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'blink-caret': {
					'50%': { borderColor: 'transparent' }
				},
				'bounce-light': {
					'0%, 100%': {
						transform: 'translateY(-5%)',
						animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(0)',
						animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
					}
				},
				'slideRight': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'5%, 95%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'slideLeft': {
					'0%': { transform: 'translateX(100%)', opacity: '0' },
					'5%, 95%': { opacity: '1' },
					'100%': { transform: 'translateX(-100%)', opacity: '0' }
				},
				'slideUp': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'5%, 95%': { opacity: '1' },
					'100%': { transform: 'translateY(-100%)', opacity: '0' }
				},
				'slideDown': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'5%, 95%': { opacity: '1' },
					'100%': { transform: 'translateY(100%)', opacity: '0' }
				},
				'glitch': {
					'0%, 100%': { transform: 'translateX(0)' },
					'20%': { transform: 'translateX(-2px)' },
					'40%': { transform: 'translateX(2px)' },
					'60%': { transform: 'translateX(-2px)' },
					'80%': { transform: 'translateX(2px)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'matrix-fall': {
					'0%': { transform: 'translateY(-100%)', opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(1000%)', opacity: '0' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				},
				'apple-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'newton-fall': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'70%': { transform: 'translateY(5%)', opacity: '1' },
					'85%': { transform: 'translateY(-2%)', opacity: '1' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'einstein-warp': {
					'0%': { transform: 'skew(0deg, 0deg)' },
					'30%': { transform: 'skew(2deg, 1deg)' },
					'70%': { transform: 'skew(-2deg, -1deg)' },
					'100%': { transform: 'skew(0deg, 0deg)' }
				},
        		'apple-breathing': {
                	'0%, 100%': { boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)' },
                	'50%': { boxShadow: '0 0 25px rgba(255, 255, 255, 0.5)' }
              	},
              	'slide-reveal': {
                	'0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
                	'100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
              	}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
				'bounce-light': 'bounce-light 1.5s infinite',
				'glitch': 'glitch 0.3s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite',
				'matrix-fall': 'matrix-fall 4s linear infinite',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'apple-bounce': 'apple-bounce 2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite',
				'newton-fall': 'newton-fall 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				'einstein-warp': 'einstein-warp 3s ease-in-out infinite',
              	'apple-breathing': 'apple-breathing 3s ease-in-out infinite',
              	'slide-reveal': 'slide-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
			},
			fontFamily: {
				inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				space: ['Space Mono', 'monospace'],
				sf: ['"SF Pro Display"', 'Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif']
			},
			textShadow: {
				'glow': '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
				'future': '0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.5)',
				'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff, 0 0 25px #0ff',
              	'apple': '0 0 1px rgba(255, 255, 255, 0.5)'
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)'
			},
			boxShadow: {
				'neon-purple': '0 0 5px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
				'neon-cyan': '0 0 5px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)',
				'futuristic': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.3)',
				'apple': '0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1)',
              	'apple-glow': '0 0 15px rgba(255, 255, 255, 0.3)',
				'glass': '0 4px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05) inset',
				'glass-hover': '0 8px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.08) inset'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
