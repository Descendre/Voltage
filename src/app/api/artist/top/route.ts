import { TopArtistsResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest): Promise<NextResponse> => {
	const authorizationHeader = req.headers.get('authorization');
	const accessToken = authorizationHeader?.split(' ')[1];

	const response = await axiosFetch.get<TopArtistsResponse>(
		`${process.env.SPOTIFY_API_ENDPOINT}/me/top/artists`,
		{
			Authorization: `Bearer ${accessToken}`,
		}
	);
	return NextResponse.json(response);
};
