export interface SpotifyUserSavedTrackResponse {
	href: string;
	items: SpotifySavedTrackProps[];
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
}

export interface SpotifySavedTrackProps {
	added_at: string;
	track: SpotifyTrackProps;
}

export interface SpotifyTrackProps {
	album: {
		album_type: string;
		artists: {
			external_urls: {
				spotify: string;
			};
			href: string;
			id: string;
			name: string;
			type: 'artist';
			uri: string;
		}[];
		available_markets: string[];
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		images: {
			height: number;
			url: string;
			width: number;
		}[];
		name: string;
		release_date: string;
		release_date_precision: string;
		total_tracks: number;
		type: 'album';
		uri: string;
	};
	artists: {
		external_urls: {
			spotify: string;
		};
		href: string;
		id: string;
		name: string;
		type: 'artist';
		uri: string;
	}[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: {
		isrc: string;
	};
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	name: string;
	popularity: number;
	preview_url: string | null;
	track_number: number;
	type: 'track';
	uri: string;
}
