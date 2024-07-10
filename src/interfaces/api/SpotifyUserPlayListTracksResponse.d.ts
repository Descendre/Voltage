export interface PlaylistTracksResponse {
	href: string;
	limit: number;
	next: string;
	offset: number;
	previous: string;
	total: number;
	items: PlayListTrackItemProps[];
}

interface PlayListTrackItemProps {
	added_at: string;
	added_by: PlayListTrackUserProps;
	is_local: boolean;
	track: PlayListTracksProps;
}

interface PlayListTrackUserProps {
	external_urls: PlayListTrackPlayListTracksExternalUrlsProps;
	followers: PlayListTrackFollowersProps;
	href: string;
	id: string;
	type: string;
	uri: string;
}

interface PlayListTrackPlayListTracksExternalUrlsProps {
	spotify: string;
}

interface PlayListTrackFollowersProps {
	href: string;
	total: number;
}

export interface PlayListTracksProps {
	album: PlayListTracksAlbumProps;
	artists: PlayListTracksArtistProps[];
	available_markets: string[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: PlayListTracksExternalIdsProps;
	external_urls: PlayListTracksExternalUrlsProps;
	href: string;
	id: string;
	is_playable: boolean;
	linked_from?: any;
	restrictions?: PlayListTracksRestrictionsProps;
	name: string;
	popularity: number;
	preview_url: string;
	track_number: number;
	type: string;
	uri: string;
	is_local: boolean;
}

interface PlayListTracksAlbumProps {
	album_type: string;
	total_tracks: number;
	available_markets: string[];
	external_urls: PlayListTracksExternalUrlsProps;
	href: string;
	id: string;
	images: PlayListTracksImageProps[];
	name: string;
	release_date: string;
	release_date_precision: string;
	restrictions?: PlayListTracksRestrictionsProps;
	type: string;
	uri: string;
	artists: PlayListTracksArtistProps[];
}

interface PlayListTracksImageProps {
	url: string;
	height: number;
	width: number;
}

interface PlayListTracksRestrictionsProps {
	reason: string;
}

interface PlayListTracksArtistProps {
	external_urls: PlayListTracksExternalUrlsProps;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
	followers?: FollowersProps;
	genres?: string[];
	images?: PlayListTracksImageProps[];
	popularity?: number;
}

interface PlayListTracksExternalIdsProps {
	isrc?: string;
	ean?: string;
	upc?: string;
}
