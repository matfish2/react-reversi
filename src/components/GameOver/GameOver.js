import React from 'react';
import './GameOver.css';

const gameOverText = (winner) => {
    if (winner==='draw') {
        return 'Draw!';
    }

    return `${winner} Wins!`;
}


const GameOver = ({score, winner, restart}) => (<div className="GameOver">
            <h3>{gameOverText(winner)}</h3>
            <p>White Score: <b>{score.white}</b></p>
            <p>Black Score: <b>{score.black}</b></p>
                
            <button className="btn btn-primary" onClick={restart}>Play Again</button>
        </div>)
        

export default GameOver;