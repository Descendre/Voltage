'use client';
import {
	HandlePlayTrackProps,
	HandleSeekTrackCommittedProps,
	HandleSeekTrackProps,
	UseMusicProps,
} from '@/interfaces';
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
		trackValue,
		setTrackValue,
		duration,
		setDuration,
		currentTime,
		setCurrentTime,
		isSeeking,
		setIsSeeking,
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

	useEffect(() => {
		const updateSliderValue = () => {
			if (currentTrack && !currentTrack.paused && !isSeeking) {
				setCurrentTime(Math.round(currentTrack.currentTime));
				setDuration(Math.round(currentTrack.duration));
				setTrackValue(Math.round(currentTrack.currentTime));
			}
		};
		const interval = setInterval(updateSliderValue, 1000);
		return () => clearInterval(interval);
	}, [currentTrack]);

	useEffect(() => {
		(async () => {
			if (currentTrack) {
				if (isSeeking) {
					currentTrack.pause();
				} else {
					if (!isPause) {
						await currentTrack.play();
					}
				}
			}
		})();
	}, [isSeeking]);

	const handleSeekTrack = ({ event, value }: HandleSeekTrackProps) => {
		setIsSeeking(true);
		setTrackValue(value as number);
		if (currentTrack) {
			const newPosition = value as number;
			currentTrack.currentTime = newPosition;
			setCurrentTime(newPosition);
		}
	};

	const handleSeekCommitted = ({
		event,
		value,
	}: HandleSeekTrackCommittedProps) => {
		setIsSeeking(false);
	};

	return {
		currentTrack,
		setCurrentTrack,
		handlePlayTrack,
		playingContents,
		setPlayingContents,
		isPause,
		setIsPause,
		trackValue,
		setTrackValue,
		duration,
		setDuration,
		currentTime,
		setCurrentTime,
		isSeeking,
		setIsSeeking,
		handleSeekTrack,
		handleSeekCommitted,
	};
};
