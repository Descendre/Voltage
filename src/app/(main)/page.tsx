'use client';
import { useArtist, usePlayList, useTrack, useUserInfo } from '@/hooks';
import { SpotifyUserInfoResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { SwitchingContents } from '@/views';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const router = useRouter();
	const { spotifyToken, setUserInfo, handleSetSpotifyToken } = useUserInfo();
	const { handleSetTrackList } = useTrack();
	const { handleSetUserPlayList } = usePlayList();
	const { handleSetArtistList } = useArtist();

	useEffect(() => {
		(async () => {
			if (!spotifyToken) router.push('/api/auth/login');
			const spotifyTokenResponse = await handleSetSpotifyToken();
			const response = await axiosFetch.get<SpotifyUserInfoResponse>(
				`/api/user/userInfo`,
				{
					Authorization: `Bearer ${spotifyTokenResponse.access_token}`,
				}
			);
			setUserInfo(response);
			handleSetTrackList(spotifyTokenResponse);
			handleSetUserPlayList(spotifyTokenResponse);
			handleSetArtistList(spotifyTokenResponse);
		})();
	}, []);

	return (
		<>
			<SwitchingContents />
		</>
	);
}
