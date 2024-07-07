'use client';
import { UseFirstFetchCompleteProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext, useEffect } from 'react';

export const useFirstFetchComplete = (): UseFirstFetchCompleteProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		userSavedTrack,
		userPlayList,
		userArtist,
		isFirstFetchComplete,
		setIsFirstFetchComplete,
	} = context;

	useEffect(() => {
		setIsFirstFetchComplete({
			userSavedTrack: userSavedTrack ? true : false,
			userPlayList: userPlayList ? true : false,
			userArtist: userArtist ? true : false,
		});
	}, [userPlayList]);

	return {
		isFirstFetchComplete,
		setIsFirstFetchComplete,
	};
};
