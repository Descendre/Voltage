'use client';
import { createTheme } from '@mui/material';
import { green, orange } from '@mui/material/colors';

export const siteTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: orange[900],
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
			playIcon: {
				play: green['A700'],
				pause: orange['A700'],
			},
		},
		icon: {
			main: '#fff',
			hide: '#888',
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
