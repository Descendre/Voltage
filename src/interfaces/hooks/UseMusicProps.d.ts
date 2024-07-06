export interface UseMusicProps {
	isPlay: boolean;
	setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
	handleTogglePlay: () => void;
}
