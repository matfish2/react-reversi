import React from 'react';
import './GameOver.css';

const GameOver = ({score, winner, restart}) => {
    const gameOverText = () => {
        if (winner==='draw') {
            return 'Draw!';
        }

        return `${winner} Wins!`;
    }

        return (<div className="GameOver">
            <h3>{gameOverText()}</h3>
            <p>White Score: <b>{score.white}</b></p>
            <p>Black Score: <b>{score.black}</b></p>
                
            <button className="btn btn-primary" onClick={restart}>Play Again</button>
        </div>)
    }


export default GameOver;