'use client';
import { useUserInfo } from '@/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const { spotifyToken, handleSetSpotifyToken } = useUserInfo();
	const router = useRouter();

	useEffect(() => {
		(async () => {
			if (spotifyToken) return;
			router.push('/api/auth/login');
			await handleSetSpotifyToken();
		})();
	}, []);
	return <>aaa</>;
}
