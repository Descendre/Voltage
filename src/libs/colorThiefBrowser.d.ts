declare module 'color-thief-browser' {
	export default class ColorThief {
		getColor(
			image: HTMLImageElement,
			quality?: number
		): [number, number, number];
	}
}
