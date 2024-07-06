import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			primary: string;
			secondary: string;
		};
	}
	interface PaletteOptions {
		layout: {
			primary: string;
			secondary: string;
		};
	}
}
