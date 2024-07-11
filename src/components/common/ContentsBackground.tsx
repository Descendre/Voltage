'use client';
import { useDominantColors, useUserSetting } from '@/hooks';
import { ContentsBackgroundProps } from '@/interfaces';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export const ContentsBackground = ({ url }: ContentsBackgroundProps) => {
	const [op, setOp] = useState<number>(1);
	const [imageUrl, setImageUrl] = useState<string>('');
	const { dominantRgbaColor } = useDominantColors(url || '');
	const { userSetting } = useUserSetting();

	useEffect(() => {
		if (userSetting.background === 'image') {
			setOp(0);
			setTimeout(() => {
				setImageUrl(url || '');
				setOp(1);
			}, 500);
		}
	}, [url, userSetting.background]);

	return (
		<>
			<Box
				zIndex={-1}
				position="fixed"
				top={0}
				left={0}
				width="100%"
				height="100%"
				sx={{
					opacity: op,
					backgroundImage:
						userSetting.background === 'image' ? `url(${imageUrl})` : 'none',
					backgroundSize: 'cover',
					filter:
						userSetting.background === 'image'
							? `blur(${op === 0 ? 10 : 5}px) brightness(0.3)`
							: 'none',
					backgroundColor:
						userSetting.background === 'dominant'
							? `rgba(${dominantRgbaColor}, 0.1)`
							: 'transparent',
					transition:
						'background-color 0.5s ease, opacity 0.3s ease-in-out, transform 0.3s ease-out',
					transform: op === 1 ? 'scale(1)' : 'scale(1.03)',
				}}
			></Box>
			<Box
				display={userSetting.background === 'image' && url ? 'block' : 'none'}
				zIndex={-2}
				position="fixed"
				top={0}
				left={0}
				width="100%"
				height="100%"
				bgcolor={`rgba(${dominantRgbaColor}, 0.1)`}
				sx={{
					transition: 'background-color 0.5s ease',
				}}
			/>
		</>
	);
};
