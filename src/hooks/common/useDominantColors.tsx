'use client';
import { getDominantColor, hexToRgba } from '@/utils';
import { useEffect, useState } from 'react';

export const useDominantColors = (imageUrl: string, alpha: number) => {
	const [dominantColor, setDominantColor] = useState<string>('transparent');
	const [dominantRgbaColor, setDominantRgbaColor] =
		useState<string>('transparent');

	useEffect(() => {
		const getColors = async () => {
			const dominantColorResponse = await getDominantColor(imageUrl);
			const dominantRgbaColorResponse = hexToRgba(dominantColorResponse, alpha);
			setDominantColor(dominantColorResponse);
			setDominantRgbaColor(dominantRgbaColorResponse);
		};
		getColors();
	}, [imageUrl]);

	return {
		dominantColor,
		dominantRgbaColor,
	};
};
