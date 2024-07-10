import { PlaylistTracksResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
	req: NextRequest,
	{ params }: { params: { playlistId: string } }
) => {
	const authorizationHeader = req.headers.get('authorization');
	const accessToken = authorizationHeader?.split(' ')[1];
	const playlistId = params.playlistId;

	const response = await axiosFetch.get<PlaylistTracksResponse>(
		`${process.env.SPOTIFY_API_ENDPOINT}/playlists/${playlistId}/tracks`,
		{
			Authorization: `Bearer ${accessToken}`,
		}
	);
	return NextResponse.json(response);
};
