'use client';
import {
	HandlePlayPlayListProps,
	HandlePlayTrackProps,
	HandleSeekTrackCommittedProps,
	HandleSeekTrackProps,
	PlaylistItem,
	PlaylistTracksResponse,
	RepeatModeType,
	SpotifyTrackProps,
	UseMusicProps,
} from '@/interfaces';
import { Context } from '@/provider';
import { useContext, useEffect, useRef } from 'react';

export const useMusic = (): UseMusicProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		userSavedTrack,
		currentTrack,
		setCurrentTrack,
		playingContents,
		setPlayingContents,
		playingPlayList,
		setPlayingPlayList,
		playingPlaylistIndex,
		setPlayingPlaylistIndex,
		lastPlayedPlayList,
		setLastPlayedPlayList,
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
		repeatMode,
		setRepeatMode,
	} = context;

	const currentTrackRef = useRef<HTMLAudioElement | null>(currentTrack);
	const playingContentsRef = useRef<SpotifyTrackProps | null>(playingContents);
	const playingPlayListRef = useRef<PlaylistItem | null>(playingPlayList);
	const lastPlayedPlayListRef = useRef<PlaylistTracksResponse | null>(
		lastPlayedPlayList
	);
	const repeatModeRef = useRef<RepeatModeType>('default');
	const playingPlaylistIndexRef = useRef<number>(playingPlaylistIndex);

	useEffect(() => {
		currentTrackRef.current = currentTrack;
		playingContentsRef.current = playingContents;
		playingPlayListRef.current = playingPlayList;
		lastPlayedPlayListRef.current = lastPlayedPlayList;
		repeatModeRef.current = repeatMode;
		playingPlaylistIndexRef.current = playingPlaylistIndex;
	}, [
		currentTrack,
		playingContents,
		lastPlayedPlayList,
		repeatMode,
		playingPlayList,
		playingPlaylistIndex,
	]);

	const handlePlayTrack = async ({
		url,
		content,
	}: HandlePlayTrackProps): Promise<void> => {
		if (!url || !content) return;
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
					handleTrackAudioEnded();
				});
				await audio.play();
				setPlayingPlayList(null);
				setLastPlayedPlayList(null);
				setCurrentTrack(audio);
				setPlayingContents(content);
			}
		} else {
			const audio = new Audio(url);
			audio.addEventListener('ended', () => {
				setIsPause(true);
				handleTrackAudioEnded();
			});
			await audio.play();
			setPlayingPlayList(null);
			setLastPlayedPlayList(null);
			setCurrentTrack(audio);
			setPlayingContents(content);
		}
	};

	const handlePlayPlayList = async ({
		url,
		content,
	}: HandlePlayPlayListProps): Promise<void> => {
		if (!url || !content) return;
		if (currentTrack) {
			if (playingPlayList?.id === content?.id) {
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
				setPlayingPlaylistIndex(0);
				audio.addEventListener('ended', () => {
					setIsPause(true);
					handleTrackAudioEnded();
				});
				await audio.play();
				setPlayingContents(null);
				setCurrentTrack(audio);
				setPlayingPlayList(content);
			}
		} else {
			const audio = new Audio(url);
			audio.addEventListener('ended', () => {
				setIsPause(true);
				handleTrackAudioEnded();
			});
			await audio.play();
			setPlayingPlaylistIndex(0);
			setPlayingContents(null);
			setCurrentTrack(audio);
			setPlayingPlayList(content);
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

	const handleSetNextTrack = async (): Promise<void> => {
		if (
			!playingContentsRef.current ||
			!userSavedTrack ||
			!currentTrackRef.current
		)
			return;

		const currentIndex = userSavedTrack.items.findIndex(
			(item) => item.track.id === playingContentsRef.current?.id
		);
		if (currentIndex === -1) return;

		let nextIndex = currentIndex + 1;
		if (nextIndex >= userSavedTrack.items.length) {
			nextIndex = 0;
		}

		const nextTrack = userSavedTrack.items[nextIndex].track;
		const nextUrl = userSavedTrack.items[nextIndex].track.preview_url;
		if (!nextUrl) return;
		currentTrackRef.current.pause();
		const audio = new Audio(nextUrl);
		audio.addEventListener('ended', () => {
			setIsPause(true);
			handleTrackAudioEnded();
		});
		await audio.play();
		setCurrentTrack(audio);
		setPlayingContents(nextTrack);
		setIsPause(false);
	};

	const handleSetPrevTrack = async (): Promise<void> => {
		if (!playingContents || !userSavedTrack || !currentTrack) return;

		const currentIndex = userSavedTrack.items.findIndex(
			(item) => item.track.id === playingContents.id
		);
		if (currentIndex === -1) return;

		let prevIndex = currentIndex - 1;
		if (prevIndex < 0) {
			prevIndex = userSavedTrack.items.length - 1;
		}

		const nextTrack = userSavedTrack.items[prevIndex].track;
		const nextUrl = userSavedTrack.items[prevIndex].track.preview_url;
		if (!nextUrl) return;
		currentTrack.pause();
		const audio = new Audio(nextUrl);
		audio.addEventListener('ended', () => {
			setIsPause(true);
			handleTrackAudioEnded();
		});
		await audio.play();
		setCurrentTrack(audio);
		setPlayingContents(nextTrack);
		setIsPause(false);
	};

	const handleSetSameTrack = async (): Promise<void> => {
		currentTrackRef.current?.currentTime ?? 0;
		await currentTrackRef.current?.play();
		setIsPause(false);
	};

	const handleSetNextPlayListTrack = async (): Promise<void> => {
		if (
			!playingPlayListRef.current ||
			!lastPlayedPlayListRef.current ||
			!currentTrackRef.current
		)
			return;
		let nextIndex = playingPlaylistIndexRef.current + 1;
		if (nextIndex >= lastPlayedPlayListRef.current.items.length) {
			nextIndex = 0;
		}

		const nextUrl =
			lastPlayedPlayListRef.current.items[nextIndex].track.preview_url;
		if (!nextUrl) return;
		currentTrackRef.current.pause();
		const audio = new Audio(nextUrl);
		audio.addEventListener('ended', () => {
			setIsPause(true);
			handleTrackAudioEnded();
		});
		await audio.play();
		setCurrentTrack(audio);
		setPlayingPlaylistIndex(nextIndex);
		setIsPause(false);
	};

	const handleSetPrevPlayListTrack = async (): Promise<void> => {
		if (
			!playingPlayListRef.current ||
			!lastPlayedPlayList ||
			!currentTrackRef.current
		)
			return;

		let prevIndex = playingPlaylistIndexRef.current - 1;
		if (prevIndex < 0) {
			prevIndex = lastPlayedPlayList.items.length - 1;
		}

		const prevUrl = lastPlayedPlayList.items[prevIndex].track.preview_url;
		if (!prevUrl) return;
		currentTrackRef.current.pause();
		const audio = new Audio(prevUrl);
		audio.addEventListener('ended', () => {
			setIsPause(true);
			handleTrackAudioEnded();
		});
		await audio.play();
		setCurrentTrack(audio);
		setPlayingPlaylistIndex(prevIndex);
		setIsPause(false);
	};

	const handleTrackAudioEnded = async (): Promise<void> => {
		switch (repeatModeRef.current) {
			case 'repeat': {
				if (playingContentsRef.current) {
					await handleSetNextTrack();
				} else if (playingPlayListRef.current) {
					handleSetNextPlayListTrack();
				}
				break;
			}
			case 'one': {
				if (playingContentsRef.current) {
					await handleSetSameTrack();
				} else if (playingPlayListRef.current) {
					handleSetSameTrack();
				}
			}
			default: {
				break;
			}
		}
	};

	return {
		currentTrack,
		setCurrentTrack,
		handlePlayTrack,
		handlePlayPlayList,
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
		repeatMode,
		setRepeatMode,
		handleSetNextTrack,
		handleSetPrevTrack,
		handleSetNextPlayListTrack,
		handleSetPrevPlayListTrack,
	};
};
