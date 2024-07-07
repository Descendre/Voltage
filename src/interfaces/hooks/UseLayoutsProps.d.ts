export interface UseLayoutsProps {
	isPlayListModal: boolean;
	setIsPlayListModal: React.Dispatch<React.SetStateAction<boolean>>;
	isFullScreen: boolean;
	setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
	handleToggleScreen: () => void;
	handleTogglePlay: () => void;
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
	isPlay: boolean;
	setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
	isLeftDetail: boolean;
	setIsLeftDetail: React.Dispatch<React.SetStateAction<boolean>>;
}
