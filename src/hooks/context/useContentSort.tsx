'use client';
import { UseContentSortProps } from '@/interfaces';
import { Context } from '@/provider';
import { DragEndEvent } from '@dnd-kit/core';
import { useContext } from 'react';

export const useContentSort = (): UseContentSortProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { userSavedTrack, setUserSavedTrack } = context;

	const handleCollentionDragEnd = (result: DragEndEvent) => {
		const { active, over } = result;
		if (userSavedTrack && active && over && active.id !== over.id) {
			const updatedTracks = [...userSavedTrack.items];
			const activeTrack = updatedTracks.find(
				(item) => item.track.id === active.id
			);
			if (!activeTrack) return;
			const activeIndex = updatedTracks.indexOf(activeTrack);
			const overIndex = updatedTracks.findIndex(
				(item) => item.track.id === over.id
			);
			updatedTracks.splice(activeIndex, 1);
			if (overIndex !== -1) {
				updatedTracks.splice(overIndex, 0, activeTrack);
			}
			setUserSavedTrack({ ...userSavedTrack, items: updatedTracks });
		}
	};

	return {
		handleCollentionDragEnd,
	};
};
