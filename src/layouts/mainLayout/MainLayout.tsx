import React, { ReactNode } from 'react';
import { MainHeader, PlayListModal } from './blocks';

export const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<MainHeader />
			{children}

			<PlayListModal />
		</>
	);
};
