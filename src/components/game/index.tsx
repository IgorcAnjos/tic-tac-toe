import { MouseEvent, useState, useEffect } from 'react';

import { DefaultContainer } from './styled';

import { Slot } from './slot';

import { PlayerSet, SlotSet } from './types';
import { Board } from './board';

const winningSequences = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const initialSlots: SlotSet[] = [
	{
		id: 0,
		enabled: true,
		player: 1,
		simbol: '',
	},
	{
		id: 1,
		enabled: true,
		player: 0,
		simbol: '',
	},
	{
		id: 2,
		enabled: true,
		player: 0,
		simbol: '',
	},
	{
		id: 3,
		enabled: true,
		player: 0,
		simbol: '',
	},
	{
		id: 4,
		enabled: true,
		player: 0,
		simbol: '',
	},
	{
		id: 5,
		enabled: true,
		player: 0,
		simbol: '',
	},
	{
		id: 6,
		enabled: true,
		player: 0,
		simbol: '',
	},
	{
		id: 7,
		enabled: true,
		player: 0,
		simbol: '',
	},
	{
		id: 8,
		enabled: true,
		player: 0,
		simbol: '',
	},
];

const initialPlayersSet: PlayerSet[] = [
	{
		id: 0,
		name: 'Player 1',
		simbol: '❌',
		slotsList: [],
	},
	{
		id: 1,
		name: 'Player 2',
		simbol: '⚫',
		slotsList: [],
	},
];

export default function Game() {
	const [move, setMove] = useState<number>(0);
	const [players, setPlayers] = useState<PlayerSet[]>([...initialPlayersSet]);
	const [currentPlayer, setCurrentPlayer] = useState<PlayerSet>(players[0]);
	const [slots, setSlots] = useState<SlotSet[]>([...initialSlots]);
	const [canPlay, setCanPlay] = useState<boolean>(true);
	const [winner, setWinner] = useState<string>('');

	// Incrementar a quantidade de movimentos feitos
	const incrementMove = () => setMove(move + 1);

	// Atualziar quem é o jogador atual da partida
	const updateCurrentPlayer = () => {
		if (move % 2 === 0 || move === 0) {
			return setCurrentPlayer(players[0]);
		}

		setCurrentPlayer(players[1]);
	};

	// Adicionar o slot selecioinado ao jogador que clicou
	const addSlotInPlayerList = (playerId: number, slotId: number) => {
		const tempPlayers = [...players];
		tempPlayers[playerId].slotsList.push(slotId);

		setPlayers(tempPlayers);
	};

	// Atualiza o slot clicado
	const updateClickedSlot = (currentPlayer: PlayerSet, slotId: number) => {
		const tempSlots = [...slots];
		tempSlots[slotId].enabled = false;
		tempSlots[slotId].simbol = currentPlayer.simbol;

		setSlots(tempSlots);
	};

	// Verifica se o jogador atual ganhou
	const checkWinning = (currentPlayerId: number) => {
		const currentSlotListPlayer = players[currentPlayerId].slotsList;

		const winner = winningSequences.some((sequence) => sequence.every((slotId) => currentSlotListPlayer.includes(slotId)));
		if (winner) {
			setCanPlay(false);
			setWinner(players[currentPlayerId].name);
		}
	};

	// Lidar com o clique em algum slot.
	const handlerSlotClick = (e: MouseEvent<HTMLButtonElement>, slotId: number) => {
		e.preventDefault();
		addSlotInPlayerList(currentPlayer.id, slotId);
		updateClickedSlot(currentPlayer, slotId);
		checkWinning(currentPlayer.id);

		incrementMove();
	};

	const checkFinishGame = () => {
		const finish = slots.every((slot) => slot.enabled === false);
		if (finish && canPlay) {
			setCanPlay(false);
		}
	};

	useEffect(() => {
		updateCurrentPlayer();
		checkFinishGame();
		console.log(currentPlayer.slotsList);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [move]);

	// const reset = () => {
	// 	setSlots([...initialSlots]);
	// 	setWinner('');
	// 	setPlayers([...initialPlayersSet]);
	// 	setCurrentPlayer(players[0]);
	// 	setCanPlay(true);
	// 	console.log(initialSlots, initialPlayersSet);
	// };

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				overflowY: 'scroll',
				gap: '1rem',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				backgroundColor: '#2E2C2F',
				margin: 'auto',
				fontSize: '1rem',
				color: '#FFFFFF',
			}}
		>
			{!canPlay && winner.length ? (
				<img
					src="https://usagif.com/wp-content/uploads/gif/confetti-25.gif"
					alt="GANHOU"
					style={{
						position: 'absolute',
						height: '50%',
						width: '100%',
						top: 0,
					}}
				/>
			) : (
				<></>
			)}

			<DefaultContainer
				height="90%"
				display="flex"
				flexDirection="column"
			>
				<Board>
					{slots.map((slot) => (
						<Slot
							key={slot.id}
							enabled={slot.enabled}
							canPlay={canPlay}
							onClick={handlerSlotClick}
							slotId={slot.id}
						>
							{slot.simbol}
						</Slot>
					))}
				</Board>
			</DefaultContainer>
			{winner.length > 0 ? <>Parabéns {winner}</> : <></>}
			<DefaultContainer
				height={'50%'}
				width={'50%'}
			>
				{players.map((player) => (
					<div
						key={player.id}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							backgroundColor: player.id === currentPlayer.id && canPlay ? 'yellowgreen' : 'transparent',
							borderRadius: '7px',
							padding: '1rem',
							width: 'max-content',
						}}
					>
						<p>{player.simbol}</p>
						<p>{player.name}</p>
					</div>
				))}
			</DefaultContainer>
			{/* <button onClick={reset}>RESET</button> */}
		</div>
	);
}
