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
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[];
	name: string;
	owner: Owner;
	primary_color: string;
	public: boolean;
	snapshot_id: string;
	tracks: Tracks;
	type: string;
	uri: string;
}
