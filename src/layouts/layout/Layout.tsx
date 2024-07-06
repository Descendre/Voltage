import React, { ReactNode } from 'react';
import { Header, LeftBar, LeftDetailBar, PlayListModal } from './blocks';
import { Box } from '@mui/material';

export const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<Header />
				<Box
					sx={{
						flexGrow: 1,
						display: 'flex',
						width: '100vw',
					}}
				>
					<LeftBar />
					<LeftDetailBar />
					{children}
				</Box>
			</Box>

			<PlayListModal />
		</>
	);
};
