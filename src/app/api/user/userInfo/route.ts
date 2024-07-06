import { SpotifyUserInfoResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
	const authorizationHeader = req.headers.get('authorization');
	const accessToken = authorizationHeader?.split(' ')[1];

	const response = await axiosFetch.get<SpotifyUserInfoResponse>(
		`${process.env.SPOTIFY_API_ENDPOINT}/me`,
		{
			Authorization: `Bearer ${accessToken}`,
		}
	);
	return NextResponse.json(response);
};
