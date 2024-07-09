import { UserSettingProps } from '../provider';

export interface UseUserSettingProps {
	userSetting: UserSettingProps;
	setUserSetting: React.Dispatch<React.SetStateAction<UserSettingProps>>;
	handleUserSetting: ({ key, value }: HandleUserSettingProps) => void;
}

export interface HandleUserSettingProps {
	key: keyof UserSettingProps;
	value: UserSettingProps[keyof UserSettingProps];
}
