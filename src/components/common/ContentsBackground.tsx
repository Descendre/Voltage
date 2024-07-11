'use client';
import { useDominantColors, useRouting, useUserSetting } from '@/hooks';
import { ContentsBackgroundProps } from '@/interfaces';
import { Box } from '@mui/material';

export const ContentsBackground = ({ url }: ContentsBackgroundProps) => {
	const { dominantRgbaColor } = useDominantColors(url || '');
	const { currentContent } = useRouting();
	const { userSetting } = useUserSetting();

	return (
		<Box
			zIndex={-1}
			position="fixed"
			top={0}
			left={0}
			width="100%"
			height="100%"
			sx={{
				backgroundImage:
					userSetting.background === 'image' ? `url(${url})` : 'none',
				backgroundSize: 'cover',
				filter: userSetting.background === 'image' ? 'blur(5px)' : 'none',
				backgroundColor:
					userSetting.background === 'dominant'
						? `rgba(${dominantRgbaColor}, 0.1)`
						: 'transparent',
				transition: 'background-color 0.3s ease',
			}}
		>
			<Box
				sx={{
					display:
						userSetting.background === 'image' &&
						![null, 'search', 'AI', 'profile'].includes(currentContent)
							? 'block'
							: 'none',
					width: '100%',
					height: '100%',
					background: 'rgba(0, 0, 0, 0.7)',
				}}
			/>
		</Box>
	);
};
