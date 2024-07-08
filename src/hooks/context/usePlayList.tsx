'use client';
import {
	SpotifyTokenProps,
	SpotifyUserPlayListResponse,
	UsePlayListProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

export const usePlayList = (): UsePlayListProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { userPlayList, setUserPlayList } = context;

	const handleSetUserPlayList = async (
		spotifyToken: SpotifyTokenProps
	): Promise<void> => {
		const response = await axiosFetch.get<SpotifyUserPlayListResponse>(
			`/api/playList/userPlayList`,
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);
		setUserPlayList(response);
	};

	return {
		userPlayList,
		setUserPlayList,
		handleSetUserPlayList,
	};
};
