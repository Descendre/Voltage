'use client';
import { useRouter } from 'next/navigation';
import { useSelectedContent, useUserInfo } from '../context';
import { useContext, useEffect } from 'react';
import {
	UserRoutingProps,
	HandleLeftBarRoutingProps,
	HandleLeftDetailRoutingProps,
} from '@/interfaces';
import { Context } from '@/provider';
import { Artist, NoSelected, PlayList, UserSavedTrack } from '@/contents';

export const useRouting = (): UserRoutingProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { currentContent, setCurrentContent } = context;

	const { handleSetSpotifyToken } = useUserInfo();
	const { selectedContents } = useSelectedContent();
	const router = useRouter();

	useEffect(() => {
		(async () => {
			console.log('a');
			const coolieSpotifyToken = await handleSetSpotifyToken();
			if (coolieSpotifyToken) return;
			router.push('/api/auth/login');
			await handleSetSpotifyToken();
		})();
	}, []);

	const handleLeftBarRouting = ({
		contentType,
	}: HandleLeftBarRoutingProps): void => {
		switch (contentType) {
			case `userSavedTrack`:
				if (selectedContents.userSavedTrack) {
					setCurrentContent(UserSavedTrack);
					break;
				}
				break;
			case `playList`:
				if (selectedContents.playList) {
					setCurrentContent(PlayList);
					break;
				}
				break;
			case 'artist':
				if (selectedContents.artist) {
					setCurrentContent(Artist);
					break;
				}
				break;
			default:
				break;
		}
	};

	const handleLeftDetailRouting = ({
		contentType,
		contentId,
	}: HandleLeftDetailRoutingProps): void => {
		switch (contentType) {
			case `userSavedTrack`:
				if (selectedContents.userSavedTrack) {
					if (selectedContents.userSavedTrack.id === contentId) {
						setCurrentContent(NoSelected);
					} else {
						setCurrentContent(UserSavedTrack);
					}
				} else {
					setCurrentContent(UserSavedTrack);
				}
				break;
			case 'playList':
				if (selectedContents.playList) {
					if (selectedContents.playList.id === contentId) {
						setCurrentContent(NoSelected);
					} else {
						setCurrentContent(PlayList);
					}
				} else {
					setCurrentContent(PlayList);
				}
				break;
			case 'artist':
				if (selectedContents.artist) {
					if (selectedContents.artist.id === contentId) {
						setCurrentContent(NoSelected);
					} else {
						setCurrentContent(Artist);
					}
				} else {
					setCurrentContent(Artist);
				}
				break;
			default:
				break;
		}
	};

	return {
		currentContent,
		handleLeftBarRouting,
		handleLeftDetailRouting,
	};
};
