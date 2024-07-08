'use client';
import {
	useArtist,
	useContentSort,
	useFirstFetchComplete,
	useLayouts,
	usePlayList,
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
import {
	DndContext,
	useDroppable,
	useSensor,
	useSensors,
	MouseSensor,
	pointerWithin,
} from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

export const LeftDetailBar = () => {
	const { selectedLeftContent } = useLayouts();
	const { userSavedTrack } = useTrack();
	const { userPlayList } = usePlayList();
	const { userArtist } = useArtist();
	const { isFirstFetchComplete } = useFirstFetchComplete();
	const { handleContentClick } = useSelectedContent();
	const { handleCollentionDragEnd } = useContentSort();
	const palette = usePalette();
	const breakpoint = useBreakPoint();

	const { setNodeRef } = useDroppable({
		id: 'unique-id',
	});
	const sensors = useSensors(
		useSensor(MouseSensor, { activationConstraint: { distance: 5 } })
	);

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
				<DndContext
					sensors={sensors}
					collisionDetection={pointerWithin}
					onDragEnd={handleCollentionDragEnd}
					modifiers={[restrictToVerticalAxis]}
				>
					<List
						ref={setNodeRef}
						sx={{
							flexGrow: 1,
							width: '100%',
							overflowY: 'overlay',
						}}
					>
						{selectedLeftContent === 'コレクション' &&
							(isFirstFetchComplete.userSavedTrack ? (
								<SortableContext
									items={
										userSavedTrack?.items.map((item) => item.track.id) || []
									}
								>
									{userSavedTrack?.items.map((item, index) => (
										<LeftDetailListItemButton
											onClick={() =>
												handleContentClick('userSavedTrack', item.track)
											}
											key={index}
											title={item.track.name}
											subTitle={item.track.name}
											url={item.track.album.images[0]?.url}
											id={item.track.id}
										/>
									))}
								</SortableContext>
							) : (
								<LeftDetailBarProgress />
							))}
						{selectedLeftContent === 'プレイリスト' &&
							(isFirstFetchComplete.userPlayList ? (
								<SortableContext
									items={userPlayList?.items.map((item) => item.id) || []}
								>
									{userPlayList?.items.map((item, index) => (
										<LeftDetailListItemButton
											onClick={() => handleContentClick('playList', item)}
											key={index}
											title={item.name}
											subTitle={item.description}
											url={item.images[0]?.url}
											id={item.id}
										/>
									))}
								</SortableContext>
							) : (
								<LeftDetailBarProgress />
							))}
						{selectedLeftContent === 'アーティスト' &&
							(isFirstFetchComplete.userArtist ? (
								<SortableContext
									items={userArtist?.artists.items.map((item) => item.id) || []}
								>
									{userArtist?.artists.items.map((item, index) => (
										<LeftDetailListItemButton
											onClick={() => handleContentClick('artist', item)}
											key={index}
											title={item.name}
											subTitle={[...item.genres].toString()}
											url={item.images[0]?.url}
											id={item.id}
										/>
									))}
								</SortableContext>
							) : (
								<LeftDetailBarProgress />
							))}
					</List>
				</DndContext>
			</Box>
			{!['xs', 'xm'].includes(breakpoint) && (
				<Box sx={{ width: '300px', maxWidth: 'calc(100% - 50px)' }} />
			)}
		</>
	);
};
