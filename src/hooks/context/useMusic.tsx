'use client';
import { UseMusicProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useMusic = (): UseMusicProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { currentTrack, setCurrentTrack } = context;

	const handlePlayTrack = (url: string | null | undefined) => {
		if (currentTrack) {
			currentTrack.pause();
			setCurrentTrack(null);
			return;
		}
		if (!url) return;
		const audio = new Audio(url);
		audio.play();
		setCurrentTrack(audio);
	};

	return {
		currentTrack,
		setCurrentTrack,
		handlePlayTrack,
	};
};
