'use client';
import { useBreakPoint, usePalette } from '@/hooks';
import {
	Avatar,
	Box,
	Button,
	IconButton,
	ToggleButton,
	ToggleButtonGroup,
} from '@mui/material';
import React from 'react';
import {
	HeaderIconButton,
	HeaderSearchBar,
	MainHeaderAvatar,
	MainHeaderLogo,
} from '../atoms';
import {
	Fullscreen,
	LibraryMusic,
	MoreHoriz,
	Search,
	SettingsSuggest,
} from '@mui/icons-material';

export const MainHeader = () => {
	const palette = usePalette();
	const breakpoint = useBreakPoint();

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
							<HeaderIconButton icon={<Search fontSize="small" />} />
							<HeaderIconButton icon={<MoreHoriz fontSize="small" />} />
						</>
					) : (
						<>
							<HeaderIconButton
								icon={<Fullscreen fontSize="small" />}
								title="レイアウト"
							/>
							<HeaderIconButton
								icon={<LibraryMusic fontSize="small" />}
								title="プレイリスト"
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
