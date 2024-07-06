import { cookies } from 'next/headers';

export const getCookie = <T>(key: string): T | undefined => {
	const cookie = cookies();
	const cookieObject = cookie.get(key);
	if (!cookieObject) return undefined;
	const valueString = cookieObject.value;
	const value: T = JSON.parse(valueString);
	return value;
};

export const hasCookie = (key: string): boolean => {
	const cookie = cookies();
	const isCookie = cookie.has(key);
	return isCookie;
};
