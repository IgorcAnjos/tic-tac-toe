import { FC } from 'react';
import { BoardProps } from './types';
import { BoardContainer } from './styled';

export const Board: FC<BoardProps> = ({ children }) => {
	const renderChildren = () => children;

	return <BoardContainer>{renderChildren()}</BoardContainer>;
};
