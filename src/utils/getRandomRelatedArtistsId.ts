import { RelatedArtistsResponse } from '@/interfaces';
import { getRandomIndex } from './getRandomIndex';

export const getRandomRelatedArtistIds = (
	relatedArtistResponse: RelatedArtistsResponse,
	count: number
): string[] => {
	const randomIds: string[] = [];

	for (let i = 0; i < count; i++) {
		const randomIndex = getRandomIndex(relatedArtistResponse.artists.length);
		const randomArtistId = relatedArtistResponse.artists[randomIndex].id;
		randomIds.push(randomArtistId);
	}

	return randomIds;
};
