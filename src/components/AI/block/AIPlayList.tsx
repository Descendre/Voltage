'use client';
import { useSpeech } from '@/hooks';
import { useBreakPoint } from '@/utils';
import { Box } from '@mui/material';
import React from 'react';
import { AIPlayListAvatar } from '../atom';

export const AIPlayList = () => {
	const { recommendationPlaylists } = useSpeech();
	const breakpoint = useBreakPoint();

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			gap="30px"
			width="100%"
		>
			{recommendationPlaylists.map((playLists, i) => (
				<Box
					key={i}
					display="flex"
					justifyContent="flex-start"
					alignItems="center"
					gap="10px"
					width="100%"
					padding="10px"
					sx={{
						overflowX: 'auto',
						overflowY: ['xs'].includes(breakpoint) ? 'visible' : 'scroll',
						'&::-webkit-scrollbar': {
							display: 'none',
						},
					}}
				>
					{playLists.map((playlist, j) => (
						<Box
							key={j}
							display="flex"
							justifyContent="flex-start"
							alignItems="center"
							gap="10px"
							flexWrap={['xs', 'sm'].includes(breakpoint) ? 'nowrap' : 'wrap'}
						>
							{playlist.tracks.map((track, k) => (
								<AIPlayListAvatar key={k} src={track.album.images[0].url} />
							))}
						</Box>
					))}
				</Box>
			))}
		</Box>
	);
};
