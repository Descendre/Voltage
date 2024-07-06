'use client';
import { SpotifyUserInfoResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import React, { useEffect } from 'react';

export const MainHeaderAvatar = () => {
	useEffect(() => {
		const feee = async () => {
			const response =
				await axiosFetch.get<SpotifyUserInfoResponse>('/api/user/userInfo');
			console.log(response);
		};
		feee();
	}, []);

	return <div>MainHeaderAvatar</div>;
};
