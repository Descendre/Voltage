import { DragEndEvent } from '@dnd-kit/core';

export interface UseContentSortProps {
	handleCollentionDragEnd: (result: DragEndEvent) => void;
}
