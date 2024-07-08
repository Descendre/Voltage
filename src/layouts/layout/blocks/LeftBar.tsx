'use client';
import { Box } from '@mui/material';
import React from 'react';
import { LeftBarIcon } from '../atoms';
import {
	AccountCircleOutlined,
	FavoriteBorderOutlined,
	LibraryMusicOutlined,
	PeopleAltOutlined,
	SearchOutlined,
} from '@mui/icons-material';
import { usePalette } from '@/utils';

export const LeftBar = () => {
	const palette = usePalette();

	const scrollBarStyles = {
		'&::-webkit-scrollbar': {
			width: '0px',
		},
	};

	return (
		<>
			<Box
				sx={{
					...scrollBarStyles,
					zIndex: 50,
					position: 'fixed',
					top: '60px',
					left: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'center',
					width: '50px',
					height: 'calc(100vh - 60px)',
					overflowX: 'hidden',
					overflowY: 'scroll',
					backgroundColor: palette.layout.secondary,
				}}
			>
				<LeftBarIcon
					icon={<FavoriteBorderOutlined />}
					titleJp="コレクション"
					contentType="userSavedTrack"
				/>
				<LeftBarIcon
					icon={<LibraryMusicOutlined />}
					titleJp="プレイリスト"
					contentType="playList"
				/>
				<LeftBarIcon
					icon={<PeopleAltOutlined />}
					titleJp="アーティスト"
					contentType="artist"
				/>
				<LeftBarIcon
					icon={<SearchOutlined />}
					titleJp="検索"
					contentType="search"
				/>
				<LeftBarIcon icon={<AccountCircleOutlined />} titleJp="プロフィール" />
			</Box>

			<Box sx={{ width: '50px' }} />
		</>
	);
};
