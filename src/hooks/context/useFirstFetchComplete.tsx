'use client';
import { UseFirstFetchCompleteProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext, useEffect } from 'react';
import { useArtist } from './useArtist';

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
	}, [userSavedTrack, userPlayList, useArtist]);

	return {
		isFirstFetchComplete,
		setIsFirstFetchComplete,
	};
};
