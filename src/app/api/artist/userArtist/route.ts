import { SpotifyUserArtistResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	const authorizationHeader = req.headers.get('authorization');
	const accessToken = authorizationHeader?.split(' ')[1];

	const response = await axiosFetch.get<SpotifyUserArtistResponse>(
		`${process.env.SPOTIFY_API_ENDPOINT}/me/following?type=artist`,
		{
			Authorization: `Bearer ${accessToken}`,
		}
	);
	return NextResponse.json(response);
};
