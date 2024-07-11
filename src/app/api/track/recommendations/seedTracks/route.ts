import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest): Promise<NextResponse> => {
	const authorizationHeader = req.headers.get('authorization');
	const accessToken = authorizationHeader?.split(' ')[1];
	const body = await req.json();
	const { seedTracks, limit, trackEnergy } = body;

	const response = await axiosFetch.get(
		`${process.env.SPOTIFY_API_ENDPOINT}/recommendations?limit=${limit}&seed_tracks=${seedTracks}&target_energy=${trackEnergy.target_energy}&target_valence=${trackEnergy.target_valence}`,
		{
			Authorization: `Bearer ${accessToken}`,
		}
	);
	return NextResponse.json(response);
};
