import { RelatedArtistsResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
	req: NextRequest,
	{ params }: { params: { artistId: string } }
): Promise<NextResponse> => {
	const authorizationHeader = req.headers.get('authorization');
	const accessToken = authorizationHeader?.split(' ')[1];

	const artistId = params.artistId;

	const response = await axiosFetch.get<RelatedArtistsResponse>(
		`${process.env.SPOTIFY_API_ENDPOINT}/artists/${artistId}/related-artists`,
		{
			Authorization: `Bearer ${accessToken}`,
		}
	);
	return NextResponse.json(response);
};
