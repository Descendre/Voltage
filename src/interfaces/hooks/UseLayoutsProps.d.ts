export interface UseLayoutsProps {
	isPlayListModal: boolean;
	setIsPlayListModal: React.Dispatch<React.SetStateAction<boolean>>;
	isFullScreen: boolean;
	setIsFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
	handleToggleScreen: () => void;
}
