import {
	PlaylistItem,
	SpotifyArtistProps,
	SpotifyUserArtistResponse,
	SpotifyUserInfoResponse,
	SpotifyUserPlaylistResponse,
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
	selectedLeftContent: 'プロフィール' | 'プレイリスト' | 'アーティスト' | null;
	setSelectedLeftContent: React.Dispatch<
		React.SetStateAction<
			'プロフィール' | 'プレイリスト' | 'アーティスト' | null
		>
	>;
	selectedLastContent: 'プロフィール' | 'プレイリスト' | 'アーティスト' | null;
	setSelectedLastContent: React.Dispatch<
		React.SetStateAction<
			'プロフィール' | 'プレイリスト' | 'アーティスト' | null
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
	playList: PlaylistItem | null;
	artist: SpotifyArtistProps | null;
}

export interface isFirstFetchCompleteProps {
	userPlayList: boolean;
	userArtist: boolean;
}
