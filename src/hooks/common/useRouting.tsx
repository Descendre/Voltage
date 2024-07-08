'use client';
import { useRouter } from 'next/navigation';
import { useSelectedContent, useUserInfo } from '../context';
import { useEffect } from 'react';
import { UserRoutingProps, HandleRoutingProps } from '@/interfaces';

export const useRouting = (): UserRoutingProps => {
	const { handleSetSpotifyToken } = useUserInfo();
	const { selectedContents } = useSelectedContent();
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const coolieSpotifyToken = await handleSetSpotifyToken();
			if (coolieSpotifyToken) return;
			router.push('/api/auth/login');
			await handleSetSpotifyToken();
		})();
	}, []);

	const handleRouting = ({
		contentType,
		contentId,
	}: HandleRoutingProps): void => {
		switch (contentType) {
			case `userSavedTrack`:
				if (selectedContents.userSavedTrack) {
					if (selectedContents.userSavedTrack.id === contentId) {
						router.push(`/`);
					} else {
						router.push(`/track/${contentId}`);
					}
				} else {
					router.push(`/track/${contentId}`);
				}
				break;
			case 'playList':
				if (selectedContents.playList) {
					if (selectedContents.playList.id === contentId) {
						router.push(`/`);
					} else {
						router.push(`/playList/${contentId}`);
					}
				} else {
					router.push(`/playList/${contentId}`);
				}
				break;
			case 'artist':
				if (selectedContents.artist) {
					if (selectedContents.artist.id === contentId) {
						router.push(`/`);
					} else {
						router.push(`/artist/${contentId}`);
					}
				} else {
					router.push(`/artist/${contentId}`);
				}
				break;
			default:
				break;
		}
	};

	return {
		handleRouting,
	};
};
