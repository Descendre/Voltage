import { SpotifyAuthApiResponse } from '@/interfaces';
import { axiosFetch } from '@/libs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url);
	const code = searchParams.get('code');

	const params = new URLSearchParams();
	params.append('grant_type', 'authorization_code');
	params.append('code', code as string);
	params.append('redirect_uri', process.env.SPOTIFY_REDIRECT_URI as string);
	params.append('client_id', process.env.SPOTIFY_CLIENT_ID as string);
	params.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET as string);

	const response = await axiosFetch.post<SpotifyAuthApiResponse>(
		'https://accounts.spotify.com/api/token',
		params,
		{
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	);

	const { access_token, refresh_token, expires_in } = response;

	const tokenData = JSON.stringify({
		access_token,
		refresh_token,
		expires_in,
	});

	const redirectUrl = new URL('/', request.url);
	const responseCookies = NextResponse.redirect(redirectUrl.toString());

	responseCookies.cookies.set('spotify_token', tokenData, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		maxAge: expires_in,
		path: '/',
	});

	return responseCookies;
};
