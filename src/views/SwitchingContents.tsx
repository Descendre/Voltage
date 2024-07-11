'use client';
import { ContentsBackground } from '@/components';
import {
	AI,
	Artist,
	NoSelected,
	PlayList,
	Search,
	UserSavedTrack,
} from '@/contents';
import { useRouting, useSelectedContent } from '@/hooks';
import { Box } from '@mui/material';
import React from 'react';

export const SwitchingContents = () => {
	const { selectedContents } = useSelectedContent();
	const { currentContent } = useRouting();

	let url: string | undefined = '';
	{
		currentContent === 'userSavedTrack'
			? (url = selectedContents.userSavedTrack?.album.images[0].url)
			: currentContent === 'playList'
				? (url = selectedContents.playList?.images[0].url)
				: currentContent === 'artist'
					? (url = selectedContents.artist?.images[0].url)
					: currentContent === 'search'
						? (url = '')
						: (url = '');
	}

	return (
		<Box width="100%" maxWidth="1000px" margin="0 auto" height="100%">
			{currentContent === 'userSavedTrack' ? (
				<UserSavedTrack />
			) : currentContent === 'playList' ? (
				<PlayList />
			) : currentContent === 'artist' ? (
				<Artist />
			) : currentContent === 'AI' ? (
				<AI />
			) : currentContent === 'search' ? (
				<Search />
			) : (
				<NoSelected />
			)}
			<ContentsBackground url={url} />
		</Box>
	);
};
