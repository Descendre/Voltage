import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface PaletteOptions {
		layout: {
			primary: string;
		};
	}
}
