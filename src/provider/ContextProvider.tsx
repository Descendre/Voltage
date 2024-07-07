'use client';
import {
	ContextProviderProps,
	SpotifyTokenProps,
	SpotifyUserArtistResponse,
	SpotifyUserInfoResponse,
	SpotifyUserPlayListResponse,
	isFirstFetchCompleteProps,
	selectedContentsProps,
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

	const [userPlayList, setUserPlayList] =
		useState<SpotifyUserPlayListResponse | null>(null);
	const [userArtist, setUserArtist] =
		useState<SpotifyUserArtistResponse | null>(null);
	const [selectedContents, setSelectedContents] =
		useState<selectedContentsProps>({
			playList: null,
		});

	const [isPlay, setIsPlay] = useState<boolean>(false);
	const [isPlayListModal, setIsPlayListModal] = useState<boolean>(false);
	const [isFullScreen, setIsFullscreen] = useState<boolean>(false);
	const [selectedLeftContent, setSelectedLeftContent] = useState<
		'プロフィール' | 'プレイリスト' | 'アーティスト' | null
	>('プレイリスト');
	const [isLeftDetail, setIsLeftDetail] = useState<boolean>(true);
	const [isFirstFetchComplete, setIsFirstFetchComplete] =
		useState<isFirstFetchCompleteProps>({
			userPlayList: false,
			userArtist: false,
		});
	const contextValue = {
		userInfo,
		setUserInfo,
		spotifyToken,
		setSpotifyToken,

		userPlayList,
		setUserPlayList,
		userArtist,
		setUserArtist,
		selectedContents,
		setSelectedContents,

		isPlay,
		setIsPlay,
		isPlayListModal,
		setIsPlayListModal,
		isFullScreen,
		setIsFullscreen,
		selectedLeftContent,
		setSelectedLeftContent,
		isLeftDetail,
		setIsLeftDetail,
		isFirstFetchComplete,
		setIsFirstFetchComplete,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
