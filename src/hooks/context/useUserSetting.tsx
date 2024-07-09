'use client';
import { HandleUserSettingProps, UseUserSettingProps } from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useUserSetting = (): UseUserSettingProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const handleUserSetting = ({ key, value }: HandleUserSettingProps): void => {
		setUserSetting((prevSetting) => ({
			...prevSetting,
			[key]: value,
		}));
	};

	const { userSetting, setUserSetting } = context;

	return {
		userSetting,
		setUserSetting,
		handleUserSetting,
	};
};
