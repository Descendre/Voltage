import { SpotifyUserSavedTrackResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	const authorizationHeader = req.headers.get('authorization');
	const accessToken = authorizationHeader?.split(' ')[1];

	const response = await axiosFetch.get<SpotifyUserSavedTrackResponse>(
		`${process.env.SPOTIFY_API_ENDPOINT}/me/tracks`,
		{
			Authorization: `Bearer ${accessToken}`,
		}
	);
	return NextResponse.json(response);
};

export const PUT = async (req: NextRequest) => {
	const authorizationHeader = req.headers.get('authorization');
	const accessToken = authorizationHeader?.split(' ')[1];

	const response = await axiosFetch.put<null>(
		`${process.env.SPOTIFY_API_ENDPOINT}/me/tracks`,
		'',
		{
			Authorization: `Bearer ${accessToken}`,
		}
	);
	return NextResponse.json(response);
};
