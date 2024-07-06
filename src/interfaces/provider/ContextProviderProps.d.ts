import { SpotifyUserInfoResponse, SpotifyUserPlaylistResponse } from '../api';
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

	isPlayListModal: boolean;
	setIsPlayListModal: React.Dispatch<React.SetStateAction<boolean>>;
	isFullScreen: boolean;
	setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
	selectedLeftContent: 'プレイリスト' | 'アーティスト' | null;
	setSelectedLeftContent: React.Dispatch<
		React.SetStateAction<'プレイリスト' | 'アーティスト' | null>
	>;
	isPlay: boolean;
	setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
	isLeftDetail: boolean;
	setIsLeftDetail: React.Dispatch<React.SetStateAction<boolean>>;

	userPlayList: SpotifyUserPlaylistResponse | null;
	setUserPlayList: React.Dispatch<
		React.SetStateAction<SpotifyUserPlaylistResponse | null>
	>;
}
