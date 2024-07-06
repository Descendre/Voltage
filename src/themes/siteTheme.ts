'use client';
import { createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

export const siteTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: blue[800],
		},
		layout: {
			primary: '#000',
			secondary: '#111',
			line: blue[900],
		},
		icon: {
			main: '#fff',
			hide: '#888',
		},
	},
});
