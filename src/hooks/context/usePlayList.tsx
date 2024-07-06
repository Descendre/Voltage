'use client';
import {
	SpotifyTokenProps,
	SpotifyUserPlayListResponse,
	UsePlayListProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext, useEffect } from 'react';

export const usePlayList = (): UsePlayListProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { spotifyToken, userPlayList, setUserPlayList } = context;

	const handleSetUserPlayList = async (
		spotifyToken: SpotifyTokenProps
	): Promise<void> => {
		const response = await axiosFetch.get<SpotifyUserPlayListResponse>(
			`/api/playList/userPlayList`,
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);
		console.log(response);
		setUserPlayList(response);
	};

	useEffect(() => {
		if (!spotifyToken) return;
		(async (): Promise<void> => {
			handleSetUserPlayList(spotifyToken);
		})();
	}, [spotifyToken]);

	return {
		userPlayList,
		setUserPlayList,
	};
};
