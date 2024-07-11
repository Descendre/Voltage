import { ReactNode } from 'react';
import {
	PlayListTracksProps,
	PlayListTracksTrackProps,
	PlaylistItem,
	PlaylistTracksResponse,
	SpotifyArtistProps,
	SpotifyRecommendationResponse,
	SpotifyTrackProps,
	SpotifyUserArtistResponse,
	SpotifyUserInfoResponse,
	SpotifyUserPlayListResponse,
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

	userPlayList: SpotifyUserPlayListResponse | null;
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
	playListTrack: PlaylistTracksResponse | null;
	setPlayListTrack: React.Dispatch<
		React.SetStateAction<PlaylistTracksResponse | null>
	>;
	lastPlayedPlayList: PlaylistTracksResponse | null;
	setLastPlayedPlayList: React.Dispatch<
		React.SetStateAction<PlaylistTracksResponse | null>
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
	playingPlayList: PlaylistItem | null;
	setPlayingPlayList: React.Dispatch<React.SetStateAction<PlaylistItem | null>>;
	playingPlaylistIndex: number;
	setPlayingPlaylistIndex: React.Dispatch<React.SetStateAction<number>>;
	isPause: boolean | null;
	setIsPause: React.Dispatch<React.SetStateAction<boolean | null>>;
	trackValue: number;
	setTrackValue: React.Dispatch<React.SetStateAction<number>>;
	duration: number;
	setDuration: React.Dispatch<React.SetStateAction<number>>;
	currentTime: number;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
	isSeeking: boolean;
	setIsSeeking: React.Dispatch<React.SetStateAction<boolean>>;
	repeatMode: RepeatModeType;
	setRepeatMode: React.Dispatch<React.SetStateAction<RepeatModeType>>;

	isSpeechModal: boolean;
	setIsSpeechModal: React.Dispatch<React.SetStateAction<boolean>>;
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

	transcript: string;
	setTranscript: React.Dispatch<React.SetStateAction<string>>;
	emotion: string;
	setEmotion: React.Dispatch<React.SetStateAction<string>>;
	recommendationPlaylists: SpotifyRecommendationResponse[][];
	setRecommendationPlaylists: React.Dispatch<
		React.SetStateAction<SpotifyRecommendationResponse[][]>
	>;
	speechText: string;
	setSpeechText: React.Dispatch<React.SetStateAction<string>>;
	voltage: EmotionLabels;
	setVoltage: React.Dispatch<React.SetStateAction<EmotionLabels>>;
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

export type RepeatModeType = 'default' | 'repeat' | 'one';

export type EmotionLabels =
	| 'Super Negative'
	| 'Negative'
	| 'Neutral'
	| 'Positive'
	| 'Super Positive'
	| null;
