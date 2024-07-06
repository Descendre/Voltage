'use client';
import {
	useFirstFetchComplete,
	useLayouts,
	usePlayList,
	useSelectedContent,
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
	const { userPlayList } = usePlayList();
	const { isFirstFetchComplete } = useFirstFetchComplete();
	const { handleSelectContent } = useSelectedContent();
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<>
			<Box
				sx={{
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
						padding: '10px',
						overflowY: 'scroll',
					}}
				>
					{selectedLeftContent === 'プレイリスト' &&
						(isFirstFetchComplete.userPlayList ? (
							userPlayList?.items.map((item, index) => (
								<LeftDetailListItemButton
									onClick={() =>
										handleSelectContent({ name: 'playList', content: item })
									}
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
				</List>
			</Box>
			{!['xs', 'xm'].includes(breakpoint) && (
				<Box sx={{ width: '300px', maxWidth: 'calc(100% - 50px)' }} />
			)}
		</>
	);
};
