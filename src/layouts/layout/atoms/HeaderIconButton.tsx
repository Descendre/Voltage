'use client';
import { HeaderIconButtonProps } from '@/interfaces';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

export const HeaderIconButton = <T extends any>({
	icon,
	title,
	onClick,
}: HeaderIconButtonProps<T>) => {
	return (
		<Tooltip title={title} placement="bottom">
			<IconButton
				onClick={onClick}
				disableTouchRipple
				sx={{ borderRadius: '10px', border: 'solid 1px #555' }}
			>
				{icon}
			</IconButton>
		</Tooltip>
	);
};
