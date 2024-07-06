'use client';
import { UseMusicProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useMusic = (): UseMusicProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { isPlay, setIsPlay } = context;

	const handleTogglePlay = () => setIsPlay((prev) => !prev);

	return {
		isPlay,
		setIsPlay,
		handleTogglePlay,
	};
};
