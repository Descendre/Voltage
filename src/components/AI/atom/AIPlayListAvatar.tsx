import { AIPlayListavatarProps } from '@/interfaces';
import { Avatar } from '@mui/material';

export const AIPlayListAvatar = ({ src }: AIPlayListavatarProps) => {
	return (
		<Avatar
			variant="square"
			src={src}
			sx={{
				width: '100px',
				height: '100px',
				borderRadius: '5px',
				cursor: 'pointer',
			}}
		/>
	);
};
