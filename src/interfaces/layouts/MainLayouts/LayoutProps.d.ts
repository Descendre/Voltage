import { HandleLeftBarRoutingProps } from '@/interfaces/hooks';
import { UserSettingProps } from '@/interfaces/provider';
import { ReactHTMLElement, ReactNode } from 'react';

export interface HeaderIconButtonProps {
	icon: ReactNode;
	title?: string;
	onClick?: () => void;
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

export interface SettingModalToggleSectionProps {
	toggles: { value: UserSettingProps[keyof UserSettingProps]; label: string }[];
	keyName: keyof UserSettingProps;
}

export interface FooterProps {
	isLeftDetailBar: boolean;
}
