'use client';
import { AIPlayList, ContentSection } from '@/components';
import { Box } from '@mui/material';
import React from 'react';

export const AI = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			gap="20px"
			width="100%"
		>
			<ContentSection title="AIプレイリスト">
				<AIPlayList />
			</ContentSection>
		</Box>
	);
};
