import { HeaderIconButtonProps } from '@/interfaces';
import { IconButton, Tooltip } from '@mui/material';
import React from 'react';

export const HeaderIconButton = ({ icon, title }: HeaderIconButtonProps) => {
	return (
		<Tooltip title={title} placement="bottom">
			<IconButton
				disableTouchRipple
				sx={{ borderRadius: '10px', border: 'solid 1px #555' }}
			>
				{icon}
			</IconButton>
		</Tooltip>
	);
};
