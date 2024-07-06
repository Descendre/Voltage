'use client';
import {
	ContextProviderProps,
	SpotifyTokenProps,
	SpotifyUserInfoResponse,
} from '@/interfaces';
import { ReactNode, createContext, useState } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [userInfo, setUserInfo] = useState<SpotifyUserInfoResponse | null>(
		null
	);
	const [spotifyToken, setSpotifyToken] = useState<SpotifyTokenProps | null>(
		null
	);

	const [isPlayListModal, setIsPlayListModal] = useState<boolean>(false);
	const [isFullScreen, setIsFullscreen] = useState<boolean>(false);

	const contextValue = {
		userInfo,
		setUserInfo,
		spotifyToken,
		setSpotifyToken,
		isPlayListModal,
		setIsPlayListModal,
		isFullScreen,
		setIsFullscreen,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
