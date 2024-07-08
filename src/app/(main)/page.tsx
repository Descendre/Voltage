'use client';

import { useRouting } from '@/hooks';

export default function Home() {
	const { currentContent } = useRouting();

	return <>{currentContent}</>;
}
