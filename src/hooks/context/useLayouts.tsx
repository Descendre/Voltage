'use client';
import { UseLayoutsProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useLayouts = (): UseLayoutsProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { isPlayListModal, setIsPlayListModal, isFullScreen, setIsFullscreen } =
		context;

	const handleToggleScreen = () => setIsFullscreen((prev) => !prev);

	return {
		isPlayListModal,
		setIsPlayListModal,
		isFullScreen,
		setIsFullscreen,
		handleToggleScreen,
	};
};
