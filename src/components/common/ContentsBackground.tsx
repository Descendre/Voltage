import { ReactNode } from 'react';

export const ContentsBackground = ({ children }: { children: ReactNode }) => {
	return (
		<div
			style={{
				width: '100%',
				textAlign: 'center',
			}}
		>
			{children}
		</div>
	);
};
