import React from 'react';
import Board from '../Board/Board';
import Score from '../../state/containers/Score';
import PropTypes from 'prop-types'

import './Game.css';

const lostTurnText = (lostTurn, currentPlayer) => {
   if (!lostTurn) return '';

   const player = currentPlayer==='white'?'Black':'White';

   return <p>{`${player} Lost his turn`}</p>

}

const Game = ({currentPlayer, board, lostTurn}) => (<div className="Game container">
<h3 className="Game--title">{currentPlayer}'s turn</h3>
{lostTurnText(lostTurn, currentPlayer)}
<div className="row">
<Score player="white"/>
<Board board={board}/>
<Score player="black" />                
</div> 
</div>)

Game.propTypes = {
    currentPlayer: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired,
    lostTurn: PropTypes.bool.isRequired
}

export default Game;