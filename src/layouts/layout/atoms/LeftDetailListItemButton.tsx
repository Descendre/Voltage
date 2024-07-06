import { LeftDetailHeaderListItemProps } from '@/interfaces';
import { KeyboardArrowRight } from '@mui/icons-material';
import {
	Avatar,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import React from 'react';

export const LeftDetailListItemButton = ({
	title,
	subTitle,
	url,
	onClick,
}: LeftDetailHeaderListItemProps) => {
	return (
		<ListItemButton
			onClick={onClick}
			sx={{ cursor: 'pointer', borderRadius: '10px', height: '60px' }}
		>
			<ListItemAvatar>
				<Avatar
					src={url}
					variant="square"
					sx={{ width: '40px', height: '40px', borderRadius: '5px' }}
				/>
			</ListItemAvatar>
			<ListItemText
				primary={title}
				secondary={subTitle || '説明なし'}
				primaryTypographyProps={{
					sx: {
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
					},
				}}
				secondaryTypographyProps={{
					sx: {
						textOverflow: 'ellipsis',
						overflow: 'hidden',
						whiteSpace: 'nowrap',
						fontSize: '0.8rem',
					},
				}}
			/>
			<KeyboardArrowRight />
		</ListItemButton>
	);
};
