export interface UseLayoutsProps {
	isSearchModal: boolean;
	setIsSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
	isSettingModal: boolean;
	setIsSettingModal: React.Dispatch<React.SetStateAction<boolean>>;
	isFullScreen: boolean;
	setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
	handleToggleScreen: () => void;
	handleTogglePlay: () => void;
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
	isPlay: boolean;
	setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
	isLeftDetail: boolean;
	setIsLeftDetail: React.Dispatch<React.SetStateAction<boolean>>;
}
