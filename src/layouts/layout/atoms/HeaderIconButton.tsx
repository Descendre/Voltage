'use client';
import { usePalette } from '@/hooks';
import { HeaderIconButtonProps } from '@/interfaces';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

export const HeaderIconButton = <T extends any>({
	icon,
	title,
	onClick,
}: HeaderIconButtonProps<T>) => {
	const palette = usePalette();

	return (
		<Tooltip title={title} placement="bottom">
			<IconButton
				onClick={onClick}
				disableTouchRipple
				sx={{
					borderRadius: '10px',
					border: `solid 1px ${palette.layout.subLine}`,
				}}
			>
				{icon}
			</IconButton>
		</Tooltip>
	);
};
