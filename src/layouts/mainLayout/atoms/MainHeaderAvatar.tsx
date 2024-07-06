'use client';
import { useUserInfo } from '@/hooks';
import { Avatar, Chip } from '@mui/material';
import React from 'react';

export const MainHeaderAvatar = () => {
	const { userInfo } = useUserInfo();
	const avatarUrl =
		userInfo?.images && userInfo.images.length > 0
			? userInfo.images[0].url
			: '';

	return (
		<Chip
			avatar={<Avatar src={avatarUrl} />}
			label={userInfo?.display_name || ''}
		/>
	);
};
