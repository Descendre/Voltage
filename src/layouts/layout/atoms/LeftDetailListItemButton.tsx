'use client';
import { useDominantColors, useSelectedContent } from '@/hooks';
import { LeftDetailHeaderListItemProps } from '@/interfaces';
import { DragHandle } from '@mui/icons-material';
import { CSS } from '@dnd-kit/utilities';
import {
	Avatar,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';

export const LeftDetailListItemButton = ({
	title,
	subTitle,
	url,
	onClick,
	id,
}: LeftDetailHeaderListItemProps) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: id,
		});
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const { selectedContents } = useSelectedContent();
	const { dominantColor, dominantRgbaColor } = useDominantColors(url);

	const isThiSelected =
		id === selectedContents.playList?.id ||
		id === selectedContents.artist?.id ||
		id === selectedContents.userSavedTrack?.id;

	return (
		<ListItemButton
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
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
			<DragHandle fontSize="small" />
		</ListItemButton>
	);
};
