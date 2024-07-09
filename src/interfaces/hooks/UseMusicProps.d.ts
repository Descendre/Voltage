import { SyntheticEvent } from 'react';
import { PlaylistItem, SpotifyTrackProps } from '../api';

export interface UseMusicProps {
	currentTrack: HTMLAudioElement | null;
	setCurrentTrack: React.Dispatch<
		React.SetStateAction<HTMLAudioElement | null>
	>;
	playingContents: SpotifyTrackProps | null;
	setPlayingContents: React.Dispatch<
		React.SetStateAction<SpotifyTrackProps | null>
	>;
	handlePlayTrack: ({ url, content }: HandlePlayTrackProps) => Promise<void>;
	isPause: boolean | null;
	setIsPause: React.Dispatch<React.SetStateAction<boolean | null>>;
	trackValue: number;
	setTrackValue: React.Dispatch<React.SetStateAction<number>>;
	duration: number;
	setDuration: React.Dispatch<React.SetStateAction<number>>;
	currentTime: number;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
	isSeeking: boolean;
	setIsSeeking: React.Dispatch<React.SetStateAction<boolean>>;
	handleSeekTrack: ({ event, value }: HandleSeekTrackProps) => void;
	handleSeekCommitted: ({
		event,
		value,
	}: HandleSeekTrackCommittedProps) => void;
}

export interface HandlePlayTrackProps {
	url: string | undefined | null;
	content: SpotifyTrackProps | null;
}

export interface HandleSeekTrackProps {
	event: Event;
	value: number | number[];
}

export interface HandleSeekTrackCommittedProps {
	event: Event | SyntheticEvent<Element, Event>;
	value: number | number[];
}
