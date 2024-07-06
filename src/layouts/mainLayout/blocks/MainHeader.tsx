'use client';
import { useBreakPoint, useLayouts, usePalette } from '@/hooks';
import { Box } from '@mui/material';
import React from 'react';
import {
	HeaderIconButton,
	HeaderSearchBar,
	MainHeaderAvatar,
	MainHeaderLogo,
} from '../atoms';
import {
	Fullscreen,
	FullscreenExit,
	MoreHoriz,
	Pause,
	PlayArrow,
	Search,
	SettingsSuggest,
} from '@mui/icons-material';
import { useMusic } from '@/hooks/context/useMusic';

export const MainHeader = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();
	const { setIsPlayListModal, isFullScreen, handleToggleScreen } = useLayouts();
	const { isPlay, handleTogglePlay } = useMusic();

	return (
		<>
			<Box
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100vw',
					height: '60px',
					padding: ['xs', 'sm'].includes(breakpoint) ? '0 5px' : '0 15px',
					backgroundColor: palette.layout.primary,
				}}
			>
				<MainHeaderLogo />
				{!['xs'].includes(breakpoint) && <HeaderSearchBar />}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '7px',
					}}
				>
					{['xs'].includes(breakpoint) ? (
						<>
							<HeaderIconButton
								icon={<Search fontSize="small" />}
								onClick={setIsPlayListModal}
							/>
							<HeaderIconButton icon={<MoreHoriz fontSize="small" />} />
						</>
					) : (
						<>
							<HeaderIconButton
								onClick={handleToggleScreen}
								icon={
									isFullScreen ? (
										<FullscreenExit fontSize="small" />
									) : (
										<Fullscreen fontSize="small" />
									)
								}
								title={isFullScreen ? '元の表示' : '全画面表示'}
							/>
							<HeaderIconButton
								onClick={handleTogglePlay}
								icon={
									isPlay ? (
										<Pause fontSize="small" />
									) : (
										<PlayArrow fontSize="small" />
									)
								}
								title={isPlay ? '停止' : '再生'}
							/>
							<HeaderIconButton
								icon={<SettingsSuggest fontSize="small" />}
								title="画面設定"
							/>
						</>
					)}
					<MainHeaderAvatar />
				</Box>
			</Box>

			<Box
				sx={{
					height: '60px',
				}}
			/>
		</>
	);
};
