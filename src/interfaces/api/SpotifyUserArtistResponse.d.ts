export interface SpotifyArtistImageProps {
	url: string;
	height: number;
	width: number;
}

export interface SpotifyArtistProps {
	id: string;
	name: string;
	genres: string[];
	images: SpotifyArtistImageProps[];
	uri: string;
}

export interface SpotifyArtistItemProps {
	items: SpotifyArtistProps[];
	next: string | null;
	total: number;
	cursors: {
		after: string;
	};
	limit: number;
	href: string;
}

export interface SpotifyUserArtistResponse {
	artists: SpotifyArtistItems;
}
