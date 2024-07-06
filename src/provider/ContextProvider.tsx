'use client';
import {
	ContextProviderProps,
	SpotifyTokenProps,
	SpotifyUserInfoResponse,
	SpotifyUserPlayListResponse,
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

	const [isPlay, setIsPlay] = useState<boolean>(false);
	const [userPlayList, setUserPlayList] =
		useState<SpotifyUserPlayListResponse | null>(null);

	const [isPlayListModal, setIsPlayListModal] = useState<boolean>(false);
	const [isFullScreen, setIsFullscreen] = useState<boolean>(false);
	const [selectedLeftContent, setSelectedLeftContent] = useState<
		'プレイリスト' | 'アーティスト'
	>('プレイリスト');
	const contextValue = {
		userInfo,
		setUserInfo,
		spotifyToken,
		setSpotifyToken,

		isPlay,
		setIsPlay,
		userPlayList,
		setUserPlayList,

		isPlayListModal,
		setIsPlayListModal,
		isFullScreen,
		setIsFullscreen,
		selectedLeftContent,
		setSelectedLeftContent,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
