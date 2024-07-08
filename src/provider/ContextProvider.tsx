'use client';
import { NoSelected } from '@/contents';
import {
	ContextProviderProps,
	SpotifyTokenProps,
	SpotifyUserArtistResponse,
	SpotifyUserInfoResponse,
	SpotifyUserPlayListResponse,
	SpotifyUserSavedTrackResponse,
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
	const [userSavedTrack, setUserSavedTrack] =
		useState<SpotifyUserSavedTrackResponse | null>(null);
	const [selectedContents, setSelectedContents] =
		useState<selectedContentsProps>({
			userSavedTrack: null,
			playList: null,
			artist: null,
		});
	const [currentContent, setCurrentContent] = useState<
		'userSavedTrack' | 'playList' | 'artist' | null
	>(null);

	const [isPlay, setIsPlay] = useState<boolean>(false);
	const [isPlayListModal, setIsPlayListModal] = useState<boolean>(false);
	const [isFullScreen, setIsFullscreen] = useState<boolean>(false);
	const [selectedLeftContent, setSelectedLeftContent] = useState<
		'コレクション' | 'プロフィール' | 'プレイリスト' | 'アーティスト' | null
	>('コレクション');
	const [selectedLastContent, setSelectedLastContent] = useState<
		'コレクション' | 'プロフィール' | 'プレイリスト' | 'アーティスト' | null
	>('コレクション');
	const [isLeftDetail, setIsLeftDetail] = useState<boolean>(true);
	const [isFooter, setIsFooter] = useState<boolean>(true);
	const [isFirstFetchComplete, setIsFirstFetchComplete] =
		useState<isFirstFetchCompleteProps>({
			userSavedTrack: false,
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
		userSavedTrack,
		setUserSavedTrack,
		selectedContents,
		setSelectedContents,
		currentContent,
		setCurrentContent,

		isPlay,
		setIsPlay,
		isPlayListModal,
		setIsPlayListModal,
		isFullScreen,
		setIsFullscreen,
		selectedLeftContent,
		setSelectedLeftContent,
		selectedLastContent,
		setSelectedLastContent,
		isLeftDetail,
		setIsLeftDetail,
		isFooter,
		setIsFooter,
		isFirstFetchComplete,
		setIsFirstFetchComplete,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
