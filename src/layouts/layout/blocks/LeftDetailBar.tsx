'use client';
import { useLayouts, usePalette, usePlayList } from '@/hooks';
import { Box, List } from '@mui/material';
import React from 'react';
import { LeftDetailBarHeader, LeftDetailHeaderListItem } from '../atoms';

export const LeftDetailBar = () => {
	const { selectedLeftContent } = useLayouts();
	const { userPlayList } = usePlayList();
	const palette = usePalette();

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'start',
				alignItems: 'center',
				width: '300px',
				height: '100%',
				backgroundColor: palette.layout.primary,
				borderRight: `solid 1px ${palette.layout.line}`,
			}}
		>
			<LeftDetailBarHeader title={selectedLeftContent} />
			<List sx={{ width: '100%', padding: '10px' }}>
				{userPlayList &&
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
