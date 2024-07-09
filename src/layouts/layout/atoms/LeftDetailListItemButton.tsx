'use client';
import { useDominantColors, useSelectedContent } from '@/hooks';
import { LeftDetailHeaderListItemProps } from '@/interfaces';
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
	id,
	icon,
}: LeftDetailHeaderListItemProps) => {
	const { selectedContents } = useSelectedContent();
	const { dominantColor, dominantRgbaColor } = useDominantColors(url);

	const isThiSelected =
		id === selectedContents.playList?.id ||
		id === selectedContents.artist?.id ||
		id === selectedContents.userSavedTrack?.id;

	return (
		<ListItemButton
			onClick={onClick}
			sx={{
				cursor: 'pointer',
				height: '60px',
				backgroundColor: isThiSelected
					? `rgba(${dominantRgbaColor}, 0.7)`
					: 'transparent',
				transition: 'background-color 0s ease-in-out',
				'&:hover': {
					backgroundColor: isThiSelected
						? `rgba(${dominantRgbaColor}, 0.7)`
						: `rgba(${dominantRgbaColor}, 0.2)`,
				},
				'.MuiTouchRipple-child': {
					color: dominantColor,
				},
			}}
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
			{icon}
		</ListItemButton>
	);
};
