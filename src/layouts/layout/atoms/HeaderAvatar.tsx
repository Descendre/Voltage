'use client';
import { useBreakPoint, useUserInfo } from '@/hooks';
import { ArrowDropDown } from '@mui/icons-material';
import { Avatar, Chip } from '@mui/material';
import React from 'react';

export const HeaderAvatar = () => {
	const { userInfo } = useUserInfo();
	const breakpoint = useBreakPoint();
	const avatarUrl =
		userInfo?.images && userInfo.images.length > 0
			? userInfo.images[0].url
			: '';

	return (
		<>
			{['xs', 'sm'].includes(breakpoint) ? (
				<Avatar src={avatarUrl} sx={{ marginLeft: '8px', cursor: 'pointer' }} />
			) : (
				<Chip
					variant="outlined"
					avatar={<Avatar src={avatarUrl} />}
					label={userInfo?.display_name || ''}
					deleteIcon={<ArrowDropDown />}
					onDelete={() => {}}
					sx={{
						paddingLeft: '5px',
						marginLeft: '13px',
						cursor: 'pointer',
					}}
				/>
			)}
		</>
	);
};
