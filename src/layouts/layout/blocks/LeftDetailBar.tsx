'use client';
import { useBreakPoint, useLayouts, usePalette, usePlayList } from '@/hooks';
import { Box, List } from '@mui/material';
import React from 'react';
import { LeftDetailBarHeader, LeftDetailHeaderListItem } from '../atoms';

export const LeftDetailBar = () => {
	const { selectedLeftContent } = useLayouts();
	const { userPlayList } = usePlayList();
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	return (
		<Box
			sx={{
				position: ['xs'].includes(breakpoint) ? 'absolute' : 'static',
				top: 0,
				left: '50px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'start',
				alignItems: 'center',
				width: ['xs'].includes(breakpoint) ? 'calc(100vw - 50px)' : '300px',
				height: '100%',
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
					userPlayList &&
					userPlayList.items.map((item, index) => (
						<LeftDetailHeaderListItem
							key={index}
							title={item.name}
							subTitle={item.description}
							url={item.images[0]?.url}
						/>
					))}
			</List>
		</Box>
	);
};
