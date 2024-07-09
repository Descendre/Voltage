'use client';
import { HandlePlayTrackProps, UseMusicProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext, useEffect } from 'react';

export const useMusic = (): UseMusicProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		currentTrack,
		setCurrentTrack,
		playingContents,
		setPlayingContents,
		isPause,
		setIsPause,
	} = context;

	const handlePlayTrack = async ({
		url,
		content,
	}: HandlePlayTrackProps): Promise<void> => {
		if (!url) return;
		if (currentTrack) {
			if (playingContents?.id === content?.id) {
				if (currentTrack.paused) {
					await currentTrack.play();
					setIsPause(false);
					setCurrentTrack(currentTrack);
				} else {
					currentTrack.pause();
					setIsPause(true);
					setCurrentTrack(currentTrack);
				}
			} else {
				currentTrack.pause();
				setCurrentTrack(null);
				setIsPause(null);
				const audio = new Audio(url);
				audio.addEventListener('ended', () => {
					setIsPause(true);
				});
				await audio.play();
				setCurrentTrack(audio);
				setPlayingContents(content);
			}
		} else {
			const audio = new Audio(url);
			audio.addEventListener('ended', () => {
				setIsPause(true);
			});
			await audio.play();
			setCurrentTrack(audio);
			setPlayingContents(content);
		}
	};

	return {
		currentTrack,
		setCurrentTrack,
		handlePlayTrack,
		playingContents,
		setPlayingContents,
		isPause,
		setIsPause,
	};
};
