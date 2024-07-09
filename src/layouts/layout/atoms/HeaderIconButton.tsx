'use client';
import { HeaderIconButtonProps } from '@/interfaces';
import { usePalette } from '@/utils';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

export const HeaderIconButton = ({
	icon,
	title,
	onClick,
}: HeaderIconButtonProps) => {
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
