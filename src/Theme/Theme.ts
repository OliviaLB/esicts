import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		footer: {
			background: string;
			text: string;
			border: string;
		};

		iconButton: {
			color: string;
			borderHover: string;
		};
		gradient1?: {
			background: string;
		};
		gradient2?: {
			background: string;
		};
		gradient3?: {
			background: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		footer?: {
			background: string;
			text: string;
			border: string;
		};

		iconButton: {
			color: string;
			borderHover: string;
		};
		gradient1?: {
			background: string;
		};
		gradient2?: {
			background: string;
		};
		gradient3?: {
			background: string;
		};
	}
}

export const appTheme = createTheme({
	palette: {
		primary: {
			main: '#282A30', // Grey
			light: '#63b6e6', // Blue
			dark: '#000000', // Black
			contrastText: '#FFFFFF', // White
		},
		secondary: {
			main: '#25aaf7', // Light Blue
			dark: '#0c337a', // Dark Blue
			light: '#34353e', // Dark Blue/Grey for icon buttons
			contrastText: '#FFFFFF', // White
		},

		background: {
			default: '#f3f8fc',
		},
		text: {
			primary: '#303030',
			secondary: '#d44316',
		},
		warning: {
			main: '#ff9800',
		},
	},
	footer: { background: '#303030', text: '#ffffff', border: '#ffffff' },
	iconButton: { color: '#25aaf7', borderHover: '#ffffff' },
	typography: {
		h1: {
			fontSize: '3rem',
			fontWeight: '500',
			color: '#fff',
			lineHeight: 1.2,
			fontFamily: "'Nunito', sans-serif",
			letterSpacing: '1px',
		},
		h2: {
			fontSize: '1.2rem',
			color: '#fff',
			lineHeight: 1.2,
			fontFamily: "'Nunito', sans-serif",
			textTransform: 'capitalize',
		},

		h3: {
			fontSize: '3rem',
			color: '#303030',
			lineHeight: 1.2,
			fontFamily: "'Nunito', sans-serif",
			textTransform: 'capitalize',
			fontWeight: 'bold',
			textAlign: 'center',
			marginBottom: '1.5rem',
		},

		h4: {
			fontSize: '1.2rem',
			color: '#fff',
			lineHeight: 1.2,
			fontFamily: "'Nunito', sans-serif",
			textTransform: 'capitalize',
		},
		body1: {
			fontSize: '1.2rem',
			color: '#000',
			lineHeight: 1.5,
			fontFamily: "'Nunito', sans-serif",
			fontWeight: 500,
			textAlign: 'justify',
			'@media (max-width: 375px)': {
				fontSize: '0.8rem',
			},
		},
		body2: {
			fontSize: '0.875rem',
			color: '#666',
			lineHeight: 1.5,
			fontFamily: "'Nunito', sans-serif",
		},
	},

	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
	},
});
