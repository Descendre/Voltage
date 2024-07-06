import { generateRandomString } from '@/utils';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export const GET = (request: NextRequest) => {
	const cookie = cookies();
	const spotifyToken = cookie.get('spotify_token');

	if (spotifyToken) {
		const redirectUrl = new URL('/', request.url);
		return NextResponse.redirect(redirectUrl.toString());
	}

	const scopes = [
		'streaming',
		'user-read-email',
		'user-read-private',
		'playlist-modify-public',
		'playlist-modify-private',
	];

	const params = new URLSearchParams();
	params.append('client_id', process.env.SPOTIFY_CLIENT_ID || '');
	params.append('response_type', 'code');
	params.append('redirect_uri', process.env.SPOTIFY_REDIRECT_URI || '');
	params.append('scope', scopes.join(' '));
	params.append('state', generateRandomString(10));
	const url = `https://accounts.spotify.com/authorize?${params}`;

	return NextResponse.redirect(url);
};