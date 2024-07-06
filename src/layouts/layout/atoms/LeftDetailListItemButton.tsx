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
			sx={{ cursor: 'pointer', backgroundColor: '#111', borderRadius: '10px' }}
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
				secondary={subTitle}
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
