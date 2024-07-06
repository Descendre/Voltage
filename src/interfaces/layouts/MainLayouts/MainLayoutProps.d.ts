import { ReactNode } from 'react';

export interface HeaderIconButtonProps<T = void> {
	icon: ReactNode;
	title?: string;
	onClick?: (T: arg) => void;
}
