import React, { ReactNode } from 'react';
import { Header } from './blocks';

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};
