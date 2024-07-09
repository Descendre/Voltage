'use client';
import { useUserSetting } from '@/hooks';
import { SettingModalToggleSectionProps } from '@/interfaces';
import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@mui/material';

export const SettingModalToggleSection = ({
	toggles,
	keyName,
}: SettingModalToggleSectionProps) => {
	const { handleUserSetting, userSetting } = useUserSetting();

	return (
		<Box width="100%" height="1000px">
			<FormControl
				sx={{
					width: '100%',
				}}
			>
				<FormLabel
					sx={{
						width: '100%',
						paddingLeft: '50px',
					}}
				>
					再生時の背景
				</FormLabel>
				<RadioGroup
					row
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '20px',
						width: '100%',
					}}
				>
					{toggles.map((toggle, index) => (
						<FormControlLabel
							key={index}
							value={toggle.value}
							control={<Radio />}
							label={toggle.label}
							checked={userSetting.background === toggle.value}
							onClick={() =>
								handleUserSetting({ key: keyName, value: toggle.value })
							}
						/>
					))}
				</RadioGroup>
			</FormControl>
		</Box>
	);
};
