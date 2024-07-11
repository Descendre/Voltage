'use client';
import { useSelectedContent } from '../context';
import { useContext } from 'react';
import {
	UserRoutingProps,
	HandleLeftBarRoutingProps,
	HandleLeftDetailRoutingProps,
} from '@/interfaces';
import { Context } from '@/provider';

export const useRouting = (): UserRoutingProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { currentContent, setCurrentContent } = context;

	const { selectedContents } = useSelectedContent();

	const handleLeftBarRouting = ({
		contentType,
	}: HandleLeftBarRoutingProps): void => {
		switch (contentType) {
			case `userSavedTrack`:
				if (selectedContents.userSavedTrack) {
					setCurrentContent('userSavedTrack');
					break;
				}
				break;
			case `playList`:
				if (selectedContents.playList) {
					setCurrentContent('playList');
					break;
				}
				break;
			case 'artist':
				if (selectedContents.artist) {
					setCurrentContent('artist');
					break;
				}
				break;
			case 'AI':
				setCurrentContent('AI');
				break;
			case 'search':
				setCurrentContent('search');
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
						setCurrentContent(null);
					} else {
						setCurrentContent('userSavedTrack');
					}
				} else {
					setCurrentContent('userSavedTrack');
				}
				break;
			case 'playList':
				if (selectedContents.playList) {
					if (selectedContents.playList.id === contentId) {
						setCurrentContent(null);
					} else {
						setCurrentContent('playList');
					}
				} else {
					setCurrentContent('playList');
				}
				break;
			case 'artist':
				if (selectedContents.artist) {
					if (selectedContents.artist.id === contentId) {
						setCurrentContent(null);
					} else {
						setCurrentContent('artist');
					}
				} else {
					setCurrentContent('artist');
				}
				break;
			case 'search':
				if (selectedContents.artist) {
					if (selectedContents.artist.id === contentId) {
						setCurrentContent(null);
					} else {
						setCurrentContent('search');
					}
				} else {
					setCurrentContent('search');
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
