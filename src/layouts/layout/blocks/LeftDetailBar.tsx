'use client';
import {
	useArtist,
	useFirstFetchComplete,
	useLayouts,
	usePlayList,
	useRouting,
	useSelectedContent,
	useTrack,
} from '@/hooks';
import { Box, List } from '@mui/material';
import React from 'react';
import {
	LeftDetailBarHeader,
	LeftDetailBarProgress,
	LeftDetailListItemButton,
} from '../atoms';
import { useBreakPoint, usePalette } from '@/utils';

export const LeftDetailBar = () => {
	const { selectedLeftContent } = useLayouts();
	const { userSavedTrack } = useTrack();
	const { userPlayList } = usePlayList();
	const { userArtist } = useArtist();
	const { isFirstFetchComplete } = useFirstFetchComplete();
	const { handleContentClick } = useSelectedContent();
	const { handleLeftDetailRouting } = useRouting();
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				sx={{
					zIndex: 50,
					position: 'fixed',
					top: '60px',
					left: '50px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'start',
					alignItems: 'center',
					width: ['xs'].includes(breakpoint) ? 'calc(100vw - 50px)' : '300px',
					height: 'calc(100vh - 60px)',
					boxSizing: 'border-box',
					backgroundColor: palette.layout.primary,
					borderRight: `solid 1px ${palette.layout.line}`,
				}}
			>
				<LeftDetailBarHeader
					title={selectedLeftContent !== null ? selectedLeftContent : ''}
				/>
				<List
					sx={{
						flexGrow: 1,
						width: '100%',
						overflowY: 'overlay',
					}}
				>
					{selectedLeftContent === 'コレクション' &&
						(isFirstFetchComplete.userSavedTrack ? (
							userSavedTrack?.items.map((item, index) => (
								<LeftDetailListItemButton
									onClick={() => {
										handleContentClick('userSavedTrack', item.track);
										handleLeftDetailRouting({
											contentType: 'userSavedTrack',
											contentId: item.track.id,
										});
									}}
									key={index}
									title={item.track.name}
									subTitle={item.track.artists[0].name}
									url={item.track.album.images[0]?.url}
									id={item.track.id}
								/>
							))
						) : (
							<LeftDetailBarProgress />
						))}
					{selectedLeftContent === 'プレイリスト' &&
						(isFirstFetchComplete.userPlayList ? (
							userPlayList?.items.map((item, index) => (
								<LeftDetailListItemButton
									onClick={() => {
										handleContentClick('playList', item);
										handleLeftDetailRouting({
											contentType: 'playList',
											contentId: item.id,
										});
									}}
									key={index}
									title={item.name}
									subTitle={item.description}
									url={item.images[0]?.url}
									id={item.id}
								/>
							))
						) : (
							<LeftDetailBarProgress />
						))}
					{selectedLeftContent === 'アーティスト' &&
						(isFirstFetchComplete.userArtist ? (
							userArtist?.artists.items.map((item, index) => (
								<LeftDetailListItemButton
									onClick={() => {
										handleContentClick('artist', item);
										handleLeftDetailRouting({
											contentType: 'artist',
											contentId: item.id,
										});
									}}
									key={index}
									title={item.name}
									subTitle={[...item.genres].toString()}
									url={item.images[0]?.url}
									id={item.id}
								/>
							))
						) : (
							<LeftDetailBarProgress />
						))}
				</List>
			</Box>
			{!['xs', 'xm'].includes(breakpoint) && (
				<Box
					sx={{
						width: ['xs'].includes(breakpoint) ? 'calc(100vw - 50px)' : '300px',
					}}
				/>
			)}
		</>
	);
};
