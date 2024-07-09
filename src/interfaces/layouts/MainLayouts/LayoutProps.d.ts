import { HandleLeftBarRoutingProps } from '@/interfaces/hooks';
import { ReactHTMLElement, ReactNode } from 'react';

export interface HeaderIconButtonProps<T = void> {
	icon: ReactNode;
	title?: string;
	onClick?: (T: arg) => void;
}

export interface LeftBarProps {
	icon: ReactNode;
	titleJp:
		| 'コレクション'
		| 'プロフィール'
		| 'プレイリスト'
		| 'アーティスト'
		| '検索';
	contentType?: 'userSavedTrack' | 'playList' | 'artist' | 'search';
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
	icon: ReactHTMLElement;
}
