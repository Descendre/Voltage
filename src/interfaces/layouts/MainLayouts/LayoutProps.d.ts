import { ReactNode } from 'react';

export interface HeaderIconButtonProps<T = void> {
	icon: ReactNode;
	title?: string;
	onClick?: (T: arg) => void;
}

export interface LeftBarProps {
	icon: ReactNode;
	titleJp: 'コレクション' | 'プロフィール' | 'プレイリスト' | 'アーティスト';
}

export interface LeftDetailBarHeaderProps {
	title: string;
}

export interface LeftDetailHeaderListItemProps {
	onClick: () => void;
	title: string;
	subTitle: string;
	url: string;
	id: string;
}
