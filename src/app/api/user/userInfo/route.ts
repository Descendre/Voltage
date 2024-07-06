import { SpotifyTokenProps, SpotifyUserInfoResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { getCookie } from '@/utils';
import { NextResponse } from 'next/server';

export const GET = async () => {
	const spotifyToken = getCookie<SpotifyTokenProps>('spotify_token');
	if (!spotifyToken) return NextResponse.json(null);

	const response = await axiosFetch.get<SpotifyUserInfoResponse>(
		`${process.env.SPOTIFY_API_ENDPOINT}/me`,
		{
			Authorization: `Bearer ${spotifyToken.access_token}`,
		}
	);
	return NextResponse.json(response);
};
