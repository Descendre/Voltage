'use client';
import { createTheme } from '@mui/material';
import { blue, green, orange, yellow } from '@mui/material/colors';

export const siteTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: blue[800],
		},
		background: {
			default: '#151515',
		},
		layout: {
			heading: '#233240',
			primary: '#0d1318',
			secondary: '#000000',
			line: '#233240',
			subLine: '#233240',
			grayLine: '#444444',
			playIcon: {
				play: green['A700'],
				pause: orange['A700'],
			},
			slider: {
				rail: '#444444',
			},
		},
		icon: {
			main: '#fff',
			hide: '#888',
		},
		table: {
			hoverBg: 'rgba(255, 255, 255, 0.1)',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
            ::-webkit-scrollbar{
                width: 10px;
				max-width: 2vw;
            },
            ::-webkit-scrollbar-thumb {
                background-color: #233240;
            },
            ::-webkit-scrollbar-track {
                background-color: transparent;
            }
            `,
		},
	},
});
