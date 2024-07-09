import { ReactNode } from 'react';
import {
	PlaylistItem,
	SpotifyArtistProps,
	SpotifyTrackProps,
	SpotifyUserArtistResponse,
	SpotifyUserInfoResponse,
	SpotifyUserPlaylistResponse,
	SpotifyUserSavedTrackResponse,
} from '../api';
import { SpotifyTokenProps } from '../cookie';

export interface ContextProviderProps {
	userInfo: SpotifyUserInfoResponse | null;
	setUserInfo: React.Dispatch<
		React.SetStateAction<SpotifyUserInfoResponse | null>
	>;
	spotifyToken: SpotifyTokenProps | null;
	setSpotifyToken: React.Dispatch<
		React.SetStateAction<SpotifyTokenProps | null>
	>;

	userPlayList: SpotifyUserPlaylistResponse | null;
	setUserPlayList: React.Dispatch<
		React.SetStateAction<SpotifyUserPlaylistResponse | null>
	>;
	userArtist: SpotifyUserArtistResponse | null;
	setUserArtist: React.Dispatch<
		React.SetStateAction<SpotifyUserArtistResponse | null>
	>;
	userSavedTrack: SpotifyUserSavedTrackResponse | null;
	setUserSavedTrack: React.Dispatch<
		React.SetStateAction<SpotifyUserSavedTrackResponse | null>
	>;
	selectedLeftContent:
		| 'コレクション'
		| 'プロフィール'
		| 'プレイリスト'
		| 'アーティスト'
		| '検索'
		| null;
	setSelectedLeftContent: React.Dispatch<
		React.SetStateAction<
			| 'コレクション'
			| 'プロフィール'
			| 'プレイリスト'
			| 'アーティスト'
			| '検索'
			| null
		>
	>;
	selectedLastContent:
		| 'コレクション'
		| 'プロフィール'
		| 'プレイリスト'
		| 'アーティスト'
		| '検索'
		| null;
	setSelectedLastContent: React.Dispatch<
		React.SetStateAction<
			| 'コレクション'
			| 'プロフィール'
			| 'プレイリスト'
			| 'アーティスト'
			| '検索'
			| null
		>
	>;
	currentContent: 'userSavedTrack' | 'playList' | 'artist' | 'search' | null;
	setCurrentContent: React.Dispatch<
		React.SetStateAction<
			'userSavedTrack' | 'playList' | 'artist' | 'search' | null
		>
	>;
	currentTrack: HTMLAudioElement | null;
	setCurrentTrack: React.Dispatch<
		React.SetStateAction<HTMLAudioElement | null>
	>;
	playingContents: SpotifyTrackProps | null;
	setPlayingContents: React.Dispatch<
		React.SetStateAction<SpotifyTrackProps | null>
	>;
	isPause: boolean | null;
	setIsPause: React.Dispatch<React.SetStateAction<boolean | null>>;

	isSearchModal: boolean;
	setIsSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
	isSettingModal: boolean;
	setIsSettingModal: React.Dispatch<React.SetStateAction<boolean>>;
	isFullScreen: boolean;
	setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
	isPlay: boolean;
	setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
	isLeftDetail: boolean;
	setIsLeftDetail: React.Dispatch<React.SetStateAction<boolean>>;
	isFooter: boolean;
	setIsFooter: React.Dispatch<React.SetStateAction<boolean>>;
	isFirstFetchComplete: isFirstFetchCompleteProps;
	setIsFirstFetchComplete: React.Dispatch<
		React.SetStateAction<isFirstFetchCompleteProps>
	>;
	selectedContents: selectedContentsProps;
	setSelectedContents: React.Dispatch<
		React.SetStateAction<selectedContentsProps>
	>;
	userSetting: UserSettingProps;
	setUserSetting: React.Dispatch<React.SetStateAction<UserSettingProps>>;
}

export interface selectedContentsProps {
	userSavedTrack: SpotifyTrackProps | null;
	playList: PlaylistItem | null;
	artist: SpotifyArtistProps | null;
	search: searchParamProps | null;
}

export interface isFirstFetchCompleteProps {
	userSavedTrack: boolean;
	userPlayList: boolean;
	userArtist: boolean;
}

export interface searchParamProps {
	query: string | null;
}

export interface UserSettingProps {
	background: 'normal' | 'dominant' | 'image';
}
