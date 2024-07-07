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
		| null;
	setSelectedLeftContent: React.Dispatch<
		React.SetStateAction<
			'コレクション' | 'プロフィール' | 'プレイリスト' | 'アーティスト' | null
		>
	>;
	selectedLastContent:
		| 'コレクション'
		| 'プロフィール'
		| 'プレイリスト'
		| 'アーティスト'
		| null;
	setSelectedLastContent: React.Dispatch<
		React.SetStateAction<
			'コレクション' | 'プロフィール' | 'プレイリスト' | 'アーティスト' | null
		>
	>;

	isPlayListModal: boolean;
	setIsPlayListModal: React.Dispatch<React.SetStateAction<boolean>>;
	isFullScreen: boolean;
	setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
	isPlay: boolean;
	setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
	isLeftDetail: boolean;
	setIsLeftDetail: React.Dispatch<React.SetStateAction<boolean>>;
	isFirstFetchComplete: isFirstFetchCompleteProps;
	setIsFirstFetchComplete: React.Dispatch<
		React.SetStateAction<isFirstFetchCompleteProps>
	>;
	selectedContents: selectedContentsProps;
	setSelectedContents: React.Dispatch<
		React.SetStateAction<selectedContentsProps>
	>;
}

export interface selectedContentsProps {
	userSavedTrack: SpotifyTrackProps | null;
	playList: PlaylistItem | null;
	artist: SpotifyArtistProps | null;
}

export interface isFirstFetchCompleteProps {
	userSavedTrack: boolean;
	userPlayList: boolean;
	userArtist: boolean;
}
