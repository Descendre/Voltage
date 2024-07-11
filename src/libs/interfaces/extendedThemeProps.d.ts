import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		layout: {
			heading: string;
			primary: string;
			secondary: string;
			line: string;
			subLine: string;
			grayLine: string;
			playIcon: {
				play: string;
				pause: string;
			};
			slider: {
				rail: string;
			};
			speechChip: string;
		};
		icon: {
			main: string;
			hide: string;
		};
		table: {
			hoverBg: string;
		};
	}
	interface PaletteOptions {
		layout: {
			heading: string;
			primary: string;
			secondary: string;
			line: string;
			subLine: string;
			grayLine: string;
			playIcon: {
				play: string;
				pause: string;
			};
			slider: {
				rail: string;
			};
			speechChip: string;
		};
		icon: {
			main: string;
			hide: string;
		};
		table: {
			hoverBg: string;
		};
	}
}
