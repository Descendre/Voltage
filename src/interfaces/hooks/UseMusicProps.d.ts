export interface UseMusicProps {
	currentTrack: HTMLAudioElement | null;
	setCurrentTrack: React.Dispatch<
		React.SetStateAction<HTMLAudioElement | null>
	>;
	handlePlayTrack: (url: string | undefined | null) => void;
}
