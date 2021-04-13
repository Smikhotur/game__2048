import React from 'react';
import { Tile } from '../Tile/Tile';
import './Board.scss';

export const Board = ({
	data,
	score,
	onClickNewGame
}) => {
	return (
		<div className="board">
			<div className='game'>
				<div className='game-group'>
					<h1 className='game-title'>2048</h1>
					<div className='game-score-container'>
						<div className='game-score-box'>
							<span className='game-score-box--current'>SCORE</span>
							<span>{score}</span>
						</div>
						<button
						className='game-refresh'
							onClick={() => {
								onClickNewGame()
							}}
						>
							Restart
						</button>
					</div>
				</div>
			</div>
			<div className='board-body'>
				{data.map((row, rowIndex) => {
					return (
						<div key={rowIndex} className='board-row'>
							{row.map((num, index) => (
								<Tile num={num} key={index} />
							))}
						</div>
					);
				})}
			</div>
		</div>
	)
}
