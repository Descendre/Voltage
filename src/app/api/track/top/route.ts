import { TopTracksResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
	const authorizationHeader = req.headers.get('authorization');
	const accessToken = authorizationHeader?.split(' ')[1];
	const body = await req.json();
	const { offSet, limit } = body;

	const response = await axiosFetch.get<TopTracksResponse>(
		`${process.env.SPOTIFY_API_ENDPOINT}/me/top/tracks?offset=${offSet}&limit=${limit}`,
		{
			Authorization: `Bearer ${accessToken}`,
		}
	);
	return NextResponse.json(response);
};
