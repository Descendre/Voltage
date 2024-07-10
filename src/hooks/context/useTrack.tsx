'use client';
import {
	SpotifyTokenProps,
	SpotifyUserSavedTrackResponse,
	UseTrackProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useTrack = (): UseTrackProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		userSavedTrack,
		setUserSavedTrack,
		playingContents,
		setPlayingContents,
		currentTrack,
		setCurrentTrack,
		setIsPause,
	} = context;

	const handleSetTrackList = async (
		spotifyToken: SpotifyTokenProps
	): Promise<void> => {
		const response = await axiosFetch.get<SpotifyUserSavedTrackResponse>(
			`/api/track/userSaved`,
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);
		setUserSavedTrack(response);
	};

	const handleSetNextTrack = async (): Promise<void> => {
		if (!playingContents || !userSavedTrack || !currentTrack) return;

		const currentIndex = userSavedTrack.items.findIndex(
			(item) => item.track.id === playingContents.id
		);
		if (currentIndex === -1) return;

		let nextIndex = currentIndex + 1;
		if (nextIndex >= userSavedTrack.items.length) {
			nextIndex = 0;
		}

		const nextTrack = userSavedTrack.items[nextIndex].track;
		const nextUrl = userSavedTrack.items[nextIndex].track.preview_url;
		if (!nextUrl) return;
		currentTrack.pause();
		const audio = new Audio(nextUrl);
		audio.addEventListener('ended', () => {
			setIsPause(true);
			// handleTrackAudioEnded();
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
			// handleTrackAudioEnded();
		});
		await audio.play();
		setCurrentTrack(audio);
		setPlayingContents(nextTrack);
		setIsPause(false);
	};

	return {
		userSavedTrack,
		setUserSavedTrack,
		handleSetTrackList,
		handleSetNextTrack,
		handleSetPrevTrack,
	};
};
