import { isFirstFetchCompleteProps } from '../provider';

export interface UseFirstFetchCompleteProps {
	isFirstFetchComplete: isFirstFetchCompleteProps;
	setIsFirstFetchComplete: React.Dispatch<
		React.SetStateAction<isFirstFetchCompleteProps>
	>;
}
