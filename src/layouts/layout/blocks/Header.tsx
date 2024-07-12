'use client';
import { useLayouts } from '@/hooks';
import { Box } from '@mui/material';
import React from 'react';
import {
	HeaderAvatar,
	HeaderIconButton,
	HeaderLogo,
	HeaderSearchBar,
} from '../atoms';
import {
	Fullscreen,
	FullscreenExit,
	Mic,
	MoreHoriz,
	Pause,
	PlayArrow,
	SettingsSuggest,
} from '@mui/icons-material';
import { useBreakPoint, usePalette } from '@/utils';

export const Header = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();
	const {
		setIsSpeechModal,
		setIsSettingModal,
		isFullScreen,
		handleToggleScreen,
		handleTogglePlay,
		isPlay,
	} = useLayouts();

	return (
		<>
			<Box
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					zIndex: 100,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100vw',
					height: '60px',
					padding: ['xs', 'sm'].includes(breakpoint)
						? '0 5px 0 0'
						: '0 15px 0 0',
					backgroundColor: palette.layout.primary,
					borderBottom: `solid 1px ${palette.layout.line}`,
				}}
			>
				<HeaderLogo />
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
								icon={<Mic fontSize="small" />}
								onClick={() => setIsSpeechModal(true)}
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
										<Pause
											fontSize="small"
											sx={{ color: palette.layout.playIcon.pause }}
										/>
									) : (
										<PlayArrow
											fontSize="small"
											sx={{ color: palette.layout.playIcon.play }}
										/>
									)
								}
								title={isPlay ? '停止' : '再生'}
							/>
							<HeaderIconButton
								icon={<SettingsSuggest fontSize="small" />}
								title="ユーザー設定"
								onClick={() => setIsSettingModal(true)}
							/>
						</>
					)}
					<HeaderAvatar />
				</Box>
			</Box>

			<Box sx={{ height: '60px' }} />
		</>
	);
};
