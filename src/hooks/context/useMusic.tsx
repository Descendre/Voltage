'use client';
import { HandlePlayTrackProps, UseMusicProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useMusic = (): UseMusicProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { currentTrack, setCurrentTrack, playingContents, setPlayingContents } =
		context;

	const handlePlayTrack = ({ url, content }: HandlePlayTrackProps): void => {
		if (!url) return;
		if (currentTrack) {
			if (playingContents?.id === content?.id) {
				currentTrack.pause();
				setCurrentTrack(null);
				setPlayingContents(null);
			} else {
				currentTrack.pause();
				setCurrentTrack(null);
				const audio = new Audio(url);
				audio.play();
				audio.addEventListener('ended', () => {
					setPlayingContents(null);
				});
				setCurrentTrack(audio);
				setPlayingContents(content);
			}
			return;
		} else {
			const audio = new Audio(url);
			audio.addEventListener('ended', () => {
				setPlayingContents(null);
			});
			audio.play();
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
	};
};
