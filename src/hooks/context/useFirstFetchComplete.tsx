'use client';
import { UseFirstFetchCompleteProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext, useEffect } from 'react';

export const useFirstFetchComplete = (): UseFirstFetchCompleteProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const { userPlayList, isFirstFetchComplete, setIsFirstFetchComplete } =
		context;

	useEffect(() => {
		setIsFirstFetchComplete({
			userPlayList: userPlayList ? true : false,
		});
	}, [userPlayList]);

	return {
		isFirstFetchComplete,
		setIsFirstFetchComplete,
	};
};
