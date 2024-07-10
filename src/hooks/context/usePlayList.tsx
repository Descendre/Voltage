'use client';
import {
	PlaylistTracksResponse,
	SpotifyTokenProps,
	SpotifyUserPlayListResponse,
	UsePlayListProps,
} from '@/interfaces';
import { axiosFetch } from '@/libs';
import { Context } from '@/provider';
import { useContext } from 'react';

export const usePlayList = (): UsePlayListProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const {
		spotifyToken,
		userPlayList,
		setUserPlayList,
		playListTrack,
		setPlayListTrack,
		lastPlayedPlayList,
		setLastPlayedPlayList,
		playingPlayList,
		setPlayingPlayList,
	} = context;

	const handleSetUserPlayList = async (
		spotifyToken: SpotifyTokenProps
	): Promise<void> => {
		const response = await axiosFetch.get<SpotifyUserPlayListResponse>(
			`/api/playList/userPlayList`,
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);
		setUserPlayList(response);
	};

	const handleSetUserPlayListTracks = async (
		playListId: string
	): Promise<void> => {
		if (!spotifyToken) return;
		const response = await axiosFetch.get<PlaylistTracksResponse>(
			`/api/playList/tracks/${playListId}`,
			{
				Authorization: `Bearer ${spotifyToken.access_token}`,
			}
		);
		setPlayListTrack(response);
	};

	return {
		userPlayList,
		setUserPlayList,
		playListTrack,
		setPlayListTrack,
		playingPlayList,
		setPlayingPlayList,
		lastPlayedPlayList,
		setLastPlayedPlayList,
		handleSetUserPlayList,
		handleSetUserPlayListTracks,
	};
};
