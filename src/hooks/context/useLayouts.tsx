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
		isSpeechModal,
		setIsSpeechModal,
		isSettingModal,
		setIsSettingModal,
		isFullScreen,
		setIsFullscreen,
		selectedLeftContent,
		setSelectedLeftContent,
		selectedLastContent,
		setSelectedLastContent,
		isPlay,
		setIsPlay,
		isLeftDetail,
		setIsLeftDetail,
	} = context;

	const handleToggleScreen = () => setIsFullscreen((prev) => !prev);

	const handleTogglePlay = () => setIsPlay((prev) => !prev);

	return {
		isSpeechModal,
		setIsSpeechModal,
		isSettingModal,
		setIsSettingModal,
		isFullScreen,
		setIsFullscreen,
		handleToggleScreen,
		setSelectedLeftContent,
		selectedLastContent,
		setSelectedLastContent,
		isPlay,
		setIsPlay,
		handleTogglePlay,
		selectedLeftContent,
		isLeftDetail,
		setIsLeftDetail,
	};
};
