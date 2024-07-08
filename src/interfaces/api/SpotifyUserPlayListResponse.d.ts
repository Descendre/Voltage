export interface SpotifyUserPlayListResponse {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: PlaylistItem[];
}

export interface PlaylistItem {
	collaborative: boolean;
	description: string;
	external_urls: ExternalUrlsProps;
	href: string;
	id: string;
	images: ImageProps[];
	name: string;
	owner: Owner;
	primary_color: string;
	public: boolean;
	snapshot_id: string;
	tracks: TracksProps;
	type: string;
	uri: string;
}

export interface Owner {
	external_urls: ExternalUrlsProps;
	followers: {
		href: string;
		total: number;
	};
	href: string;
	id: string;
	type: string;
	uri: string;
	display_name: string;
}

export interface PlaylistTrackItem {
	added_at: string;
	added_by: User;
	is_local: boolean;
	primary_color: string | null;
	track: Track;
	video_thumbnail: VideoThumbnailProps;
}

export interface TracksProps {
	href: string;
	total: number;
}

export interface ExternalUrlsProps {
	spotify: string;
}

export interface ExternalIdsProps {
	isrc: string;
	ean: string;
	upc: string;
}

export interface ImageProps {
	url: string;
	height: number | null;
	width: number | null;
}
