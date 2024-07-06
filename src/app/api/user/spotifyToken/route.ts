import { SpotifyTokenProps } from '@/interfaces';
import { getCookie } from '@/utils/serverSide';
import { NextResponse } from 'next/server';

export const GET = async () => {
	const spotifyToken = getCookie<SpotifyTokenProps>('spotify_token');
	if (!spotifyToken) return NextResponse.json(null);
	return NextResponse.json(spotifyToken);
};
