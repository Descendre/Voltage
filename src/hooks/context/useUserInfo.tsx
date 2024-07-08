'use client';
import { SpotifyTokenProps, UseUserInfoProps } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useUserInfo = (): UseUserInfoProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { userInfo, setUserInfo, spotifyToken, setSpotifyToken } = context;

	const handleSetSpotifyToken = async (): Promise<SpotifyTokenProps> => {
		const response: SpotifyTokenProps = await axiosFetch.get(
			'/api/user/spotifyToken'
		);
		setSpotifyToken(response);
		return response;
	};

	return {
		userInfo,
		setUserInfo,
		spotifyToken,
		setSpotifyToken,
		handleSetSpotifyToken,
	};
};
