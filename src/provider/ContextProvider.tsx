import { SpotifyUserInfoResponse } from '@/interfaces';
import { ContextProviderProps } from '@/interfaces/provider';
import { ReactNode, createContext, useState } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [userInfo, setUserInfo] = useState<SpotifyUserInfoResponse | null>(
		null
	);

	const contextValue = {
		userInfo,
		setUserInfo,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
