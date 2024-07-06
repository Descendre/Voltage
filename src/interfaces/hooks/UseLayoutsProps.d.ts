export interface UseLayoutsProps {
	isPlayListModal: boolean;
	setIsPlayListModal: React.Dispatch<React.SetStateAction<boolean>>;
	isFullScreen: boolean;
	setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
	handleToggleScreen: () => void;
	handleTogglePlay: () => void;
	selectedLeftContent: 'プレイリスト' | 'アーティスト';
	setSelectedLeftContent: React.Dispatch<
		React.SetStateAction<'プレイリスト' | 'アーティスト'>
	>;
	isPlay: boolean;
	setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
}
