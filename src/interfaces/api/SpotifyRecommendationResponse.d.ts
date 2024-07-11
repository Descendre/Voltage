export interface SpotifyRecommendationResponse {
	seeds: {
		afterFilteringSize: number;
		afterRelinkingSize: number;
		href: string;
		id: string;
		initialPoolSize: number;
		type: string;
	}[];
	tracks: RecommendationTrackProps[];
}

interface RecommendationTrackProps {
	album: RecommendationAlbumProps;
	artists: Artist[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: RecommendationExternalIdsProps;
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	is_playable: boolean;
	linked_from: {};
	restrictions: {
		reason: string;
	};
	name: string;
	popularity: number;
	preview_url: string;
	track_number: number;
	type: string;
	uri: string;
	is_local: boolean;
}

interface RecommendationAlbumProps {
	album_type: string;
	total_tracks: number;
	available_markets: string[];
	external_urls: {
		spotify: string;
	};
	href: string;
	id: string;
	images: {
		url: string;
		height: number;
		width: number;
	}[];
	name: string;
	release_date: string;
	release_date_precision: string;
	restrictions: {
		reason: string;
	};
	type: string;
	uri: string;
	artists: RecommendationArtistProps[];
}

interface RecommendationArtistProps {
	external_urls: {
		spotify: string;
	};
	followers: {
		href: string;
		total: number;
	};
	genres: string[];
	href: string;
	id: string;
	images: {
		url: string;
		height: number;
		width: number;
	}[];
	name: string;
	popularity: number;
	type: string;
	uri: string;
}

interface RecommendationExternalIdsProps {
	isrc: string;
	ean: string;
	upc: string;
}
