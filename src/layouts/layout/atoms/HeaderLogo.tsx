'use client';
import { useBreakPoint } from '@/hooks';
import { Avatar } from '@mui/material';
import React from 'react';

export const HeaderLogo = () => {
	const breakpoint = useBreakPoint();

	return (
		<Avatar
			src={
				['xs'].includes(breakpoint)
					? '/SOZO_icon_transparent2.svg'
					: '/SOZO_logo_transparent2.svg'
			}
			variant="square"
			sx={{
				width: ['xs'].includes(breakpoint) ? 'auto' : '150px',
				height: '80%',
				aspectRatio: ['xs'].includes(breakpoint) ? '1/1' : '',
				maxWidth: '50vw',
				cursor: 'pointer',
			}}
		/>
	);
};
