'use client';
import {
	SpotifyTokenProps,
	SpotifyUserArtistResponse,
	UseArtistProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useArtist = (): UseArtistProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { userArtist, setUserArtist } = context;

	const handleSetArtistList = async (
		spotifyToken: SpotifyTokenProps
	): Promise<void> => {
		const response = await axiosFetch.get<SpotifyUserArtistResponse>(
			`/api/artist/userArtist`,
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);
		setUserArtist(response);
	};

	return {
		userArtist,
		setUserArtist,
		handleSetArtistList,
	};
};
