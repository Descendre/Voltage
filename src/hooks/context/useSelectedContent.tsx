'use client';
import {
	UseSelectedContentProps,
	handleSelectContentProps,
} from '@/interfaces';
import { Context } from '@/provider';
import { useContext } from 'react';

export const useSelectedContent = (): UseSelectedContentProps => {
	const context = useContext(Context);
	if (!context) {
		throw new Error('Context is not provided');
	}

	const handleSelectContent = ({
		name,
		content,
	}: handleSelectContentProps): void => {
		setSelectedContents((prev) => ({ ...prev, [name]: content }));
	};

	const { selectedContents, setSelectedContents } = context;
	console.log(selectedContents);
	return {
		selectedContents,
		setSelectedContents,
		handleSelectContent,
	};
};
