import React, { Component } from 'react';
import './GameOver.css';

class GameOver extends Component {
    
    render() {
        return (<div className="GameOver">
            <h3>{this.gameOverText()}</h3>
            <button className="btn btn-primary" onClick={this.props.restart}>Play Again</button>
        </div>)
    }

     gameOverText() {
        if (this.props.winner==='draw') {
            return 'Draw!';
        }

        return `${this.props.winner} Wins!`;
    }
}

export default GameOver;