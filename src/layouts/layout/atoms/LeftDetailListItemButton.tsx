'use client';
import { useSelectedContent } from '@/hooks';
import { LeftDetailHeaderListItemProps } from '@/interfaces';
import { getDominantColor, hexToRgba } from '@/utils';
import { KeyboardArrowRight } from '@mui/icons-material';
import {
	Avatar,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

export const LeftDetailListItemButton = ({
	title,
	subTitle,
	url,
	onClick,
	id,
}: LeftDetailHeaderListItemProps) => {
	const { selectedContents } = useSelectedContent();

	const [dominantColor, setDominantColor] = useState('transparent');
	const [dominantRgbaColor, setDominantRgbaColor] = useState('transparent');

	useEffect(() => {
		const getColor = async () => {
			const color = await getDominantColor(url);
			const rgbaColor = hexToRgba(color, 0.2);
			setDominantColor(color);
			setDominantRgbaColor(rgbaColor);
		};
		getColor();
	}, [url]);

	return (
		<ListItemButton
			onClick={onClick}
			sx={{
				cursor: 'pointer',
				borderRadius: '10px',
				height: '60px',
				backgroundColor:
					id === selectedContents.playList?.id
						? dominantRgbaColor
						: 'transparent',
				transition: 'background-color 0.15s ease-in-out',
				'&:hover': {
					backgroundColor: dominantRgbaColor,
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
			<KeyboardArrowRight />
		</ListItemButton>
	);
};
