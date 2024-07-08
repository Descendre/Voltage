'use client';
import { Artist, NoSelected, PlayList, UserSavedTrack } from '@/contents';
import {
	useArtist,
	usePlayList,
	useRouting,
	useTrack,
	useUserInfo,
} from '@/hooks';
import { SpotifyUserInfoResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const router = useRouter();
	const { setUserInfo, handleSetSpotifyToken } = useUserInfo();
	const { currentContent } = useRouting();
	const { handleSetTrackList } = useTrack();
	const { handleSetUserPlayList } = usePlayList();
	const { handleSetArtistList } = useArtist();

	useEffect(() => {
		(async () => {
			router.push('/api/auth/login');
			const spotifyToken = await handleSetSpotifyToken();
			const response = await axiosFetch.get<SpotifyUserInfoResponse>(
				`/api/user/userInfo`,
				{
					Authorization: `Bearer ${spotifyToken.access_token}`,
				}
			);
			setUserInfo(response);
			handleSetTrackList(spotifyToken);
			handleSetUserPlayList(spotifyToken);
			handleSetArtistList(spotifyToken);
		})();
	}, []);

	return (
		<Box width="100%" height="100%">
			{currentContent === 'userSavedTrack' ? (
				<UserSavedTrack />
			) : currentContent === 'playList' ? (
				<PlayList />
			) : currentContent === 'artist' ? (
				<Artist />
			) : (
				<NoSelected />
			)}
		</Box>
	);
}
