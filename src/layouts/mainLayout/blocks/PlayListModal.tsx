'use client';
import { useLayouts } from '@/hooks';
import { Box, Grow, Modal } from '@mui/material';
import React, { useEffect } from 'react';

export const PlayListModal = () => {
	const { isPlayListModal, setIsPlayListModal } = useLayouts();

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === '/') {
				setIsPlayListModal(true);
			}
		};

		// キーボードイベントを監視するために追加
		document.addEventListener('keydown', handleKeyDown);

		// コンポーネントのアンマウント時にイベントリスナーをクリーンアップする
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<Modal
			open={isPlayListModal}
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Grow in={isPlayListModal}>
				<Box
					sx={{ width: '100px', height: '100px', backgroundColor: '#aff' }}
				/>
			</Grow>
		</Modal>
	);
};
