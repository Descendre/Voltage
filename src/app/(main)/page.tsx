'use client';
import { useLayouts, useSelectedContent, useTrack, useUserInfo } from '@/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const { spotifyToken, handleSetSpotifyToken } = useUserInfo();
	const { selectedLastContent } = useLayouts();
	const { selectedContents } = useSelectedContent();
	const router = useRouter();
	const {} = useTrack();

	useEffect(() => {
		(async () => {
			if (spotifyToken) return;
			router.push('/api/auth/login');
			await handleSetSpotifyToken();
		})();
	}, []);

	return (
		<>
			{selectedLastContent === 'プレイリスト' && selectedContents.playList
				? 'playList'
				: selectedLastContent === 'アーティスト' && selectedContents.artist
					? 'artist'
					: selectedLastContent === 'プロフィール'
						? 'profile'
						: ''}
		</>
	);
}
