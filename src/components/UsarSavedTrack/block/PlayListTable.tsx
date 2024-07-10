'use client';
import { usePlayList, useSelectedContent } from '@/hooks';
import { formatMsSeconds, usePalette } from '@/utils';
import { CheckCircle, DragIndicator, PlayArrow } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';

export const PlayListTable = () => {
	const palette = usePalette();
	const { selectedContents } = useSelectedContent();
	const { playListTrack, playingPlayList, playingPlaylistIndex } =
		usePlayList();
	const isSelected = (index: number): boolean => {
		const isSelected: boolean =
			playingPlayList?.id === selectedContents.playList?.id &&
			playingPlaylistIndex === index;
		return isSelected;
	};

	return (
		<TableContainer sx={{ width: '95%' }}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell sx={{ color: palette.text.secondary }}>No</TableCell>
						<TableCell sx={{ color: palette.text.secondary }}>
							トラック
						</TableCell>
						<TableCell sx={{ color: palette.text.secondary }}>長さ</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{playListTrack?.items.map((track, index) => (
						<TableRow
							key={index}
							sx={{
								cursor: 'pointer',
								backgroundColor: isSelected(index)
									? palette.table.hoverBg
									: 'transparent',
								'&: hover': {
									backgroundColor: palette.table.hoverBg,
								},
								'&: hover .commands': {
									opacity: 1,
									userSelect: 'auto',
								},
							}}
						>
							<TableCell
								sx={{ color: palette.text.secondary, borderBottom: 'none' }}
							>
								{index + 1}
							</TableCell>
							<TableCell sx={{ borderBottom: 'none' }}>
								<Box
									display="flex"
									justifyContent="start"
									alignItems="center"
									gap="15px"
								>
									<Avatar
										src={track.track.album.images[0].url}
										variant="square"
										sx={{
											borderRadius: '5px',
										}}
									/>
									<Box>
										<Box>{track.track.name}</Box>
										<Box>
											{track.track.artists.map((artist, idx) => (
												<span
													key={artist.id}
													style={{ color: palette.text.secondary }}
												>
													{artist.name}
													{idx < track.track.artists.length - 1 && '・'}
												</span>
											))}
										</Box>
									</Box>
								</Box>
							</TableCell>
							<TableCell
								sx={{ color: palette.text.secondary, borderBottom: 'none' }}
							>
								{formatMsSeconds(track.track.duration_ms)}
							</TableCell>
							<TableCell sx={{ borderBottom: 'none' }}>
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
								>
									<Box
										className="commands"
										display="flex"
										justifyContent="center"
										alignItems="center"
										gap="30px"
										sx={{
											opacity: 0,
											userSelect: 'none',
										}}
									>
										<CheckCircle fontSize="small" color="primary" />
										<PlayArrow />
									</Box>
									<DragIndicator
										fontSize="small"
										sx={{ color: palette.text.secondary }}
									/>
								</Box>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
