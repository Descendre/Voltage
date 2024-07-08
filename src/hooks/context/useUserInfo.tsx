'use client';
import {
	SpotifyTokenProps,
	SpotifyUserInfoResponse,
	UseUserInfoProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext, useEffect } from 'react';

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

	const handleSetUserInfo = async (
		spotifyToken: SpotifyTokenProps
	): Promise<void> => {
		const response = await axiosFetch.get<SpotifyUserInfoResponse>(
			`/api/user/userInfo`,
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);
		setUserInfo(response);
	};

	useEffect(() => {
		if (!spotifyToken) return;
		(async (): Promise<void> => {
			handleSetUserInfo(spotifyToken);
		})();
	}, [spotifyToken]);

	return {
		userInfo,
		setUserInfo,
		spotifyToken,
		setSpotifyToken,
		handleSetSpotifyToken,
	};
};
