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

	const { userSavedTrack, setUserSavedTrack } = context;

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

	return {
		userSavedTrack,
		setUserSavedTrack,
		handleSetTrackList,
	};
};
