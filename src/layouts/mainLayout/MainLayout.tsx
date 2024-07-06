import React, { ReactNode } from 'react';
import { MainHeader } from './blocks';

export const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<MainHeader />
			{children}
		</>
	);
};
