import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			primary: string;
			secondary: string;
			line: string;
		};
		icon: {
			main: string;
			hide: string;
		};
	}
	interface PaletteOptions {
		layout: {
			primary: string;
			secondary: string;
			line: string;
		};
		icon: {
			main: string;
			hide: string;
		};
	}
}
