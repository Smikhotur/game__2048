import React from 'react'
import './Game.scss'


export const Game = ({
	onClickNewGame,
	overlay,
	onClickKeepGoing
}) => {
	const overlayPicker = () => {
		if (overlay === 'playing') {
			return 'gameoverlay__none'
		} if (overlay === ('win' || 'gameover')) {
			return 'gameoverlay'
		}
	}

	return (
		<div className={overlayPicker()}>
			{overlay === 'win' &&
				<div>
					<h1 className="gameoverlay__message">You Win!</h1>
					<button className="gameoverlay__button" onClick={onClickKeepGoing}>Keep Going!</button>
				</div>}
			{overlay === 'gameover' &&
				<div>
					<h1 className="gameoverlay__message">GAME OVER!</h1>
					<button className="gameoverlay__button" onClick={onClickNewGame}>Try again!</button>
				</div>}
		</div>
	)
}
