import { FC, MouseEvent } from 'react';
import { SlotContainer } from './styled';
import { SlotProps } from './types';

export const Slot: FC<SlotProps> = ({ children, enabled, onClick, slotId, canPlay }) => {
	const handlerOnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (enabled && canPlay) {
			onClick(e, slotId);
		}
	};

	const renderChildren = () => {
		return children;
	};

	return (
		<SlotContainer
			onClick={handlerOnClick}
			enabled={enabled}
			slotId={slotId}
		>
			{renderChildren()}
		</SlotContainer>
	);
};
