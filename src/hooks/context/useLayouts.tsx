'use client';
import { UseLayoutsProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useLayouts = (): UseLayoutsProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		isPlayListModal,
		setIsPlayListModal,
		isFullScreen,
		setIsFullscreen,
		selectedLeftContent,
		setSelectedLeftContent,
		isPlay,
		setIsPlay,
	} = context;

	const handleToggleScreen = () => setIsFullscreen((prev) => !prev);

	const handleTogglePlay = () => setIsPlay((prev) => !prev);

	return {
		isPlayListModal,
		setIsPlayListModal,
		isFullScreen,
		setIsFullscreen,
		handleToggleScreen,
		setSelectedLeftContent,
		isPlay,
		setIsPlay,
		handleTogglePlay,
		selectedLeftContent,
	};
};
