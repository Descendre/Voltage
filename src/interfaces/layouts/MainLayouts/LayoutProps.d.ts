import { ReactNode } from 'react';

export interface HeaderIconButtonProps<T = void> {
	icon: ReactNode;
	title?: string;
	onClick?: (T: arg) => void;
}

export interface LeftBarProps {
	icon: ReactNode;
	titleJp: 'プレイリスト' | 'アーティスト';
}

export interface LeftDetailBarHeaderProps {
	title: string;
}

export interface LeftDetailHeaderListItemProps {
	title: string;
	subTitle: string;
	url: string;
}
