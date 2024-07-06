export interface UseLayoutsProps {
	isPlayListModal: boolean;
	setIsPlayListModal: React.Dispatch<React.SetStateAction<boolean>>;
	isFullScreen: boolean;
	setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
	handleToggleScreen: () => void;
	selectedLeftContent: 'プレイリスト' | 'アーティスト';
	setSelectedLeftContent: React.Dispatch<
		React.SetStateAction<'プレイリスト' | 'アーティスト'>
	>;
}
