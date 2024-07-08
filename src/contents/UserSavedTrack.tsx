'use client';
import { ContentsBackground } from '@/components';
import { useSelectedContent } from '@/hooks';

export const UserSavedTrack = () => {
	const { selectedContents } = useSelectedContent();

	return (
		<ContentsBackground
			url={selectedContents.userSavedTrack?.album.images[0].url}
		>
			<div
				style={{
					width: '100%',
					height: '2000px',
				}}
			>
				UserSavedTrack
			</div>
		</ContentsBackground>
	);
};
