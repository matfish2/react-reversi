import React from 'react';
import Board from '../Board/Board';
import Score from '../../state/containers/Score';
import PropTypes from 'prop-types'

import './Game.css';
//this.lostTurn()}  

const Game = ({currentPlayer, board}) => (<div className="Game container">
<h3 className="Game--title">{currentPlayer}'s turn</h3>
<div className="row">
<Score player="white"/>
<Board board={board}/>
<Score player="black" />                
</div> 
</div>);
        
    //     winner() {
    //         var whiteScore = this.score('white');
    //         var blackScore = this.score('black');

    //         if (whiteScore > blackScore) return 'white';

    //         if (whiteScore===blackScore) return 'draw';

    //         return 'black';
    //     }

    //     lostTurn() {
    //         if (!this.props.lostTurn) return '';

    //         return <h4>{this.opponent()} lost his turn</h4>
    //     }

    //     opponent() {
    //         return this.props.currentPlayer==='white'?'Black':'White';
    //     }

    //     score(player) {
    //         var score = 0;
            
    //         this.props.board.forEach(row=>{
    //             row.forEach(cell=>{
    //                 if (cell.disk===player) score++;
    //             });
    //         })
            
    //         return score;
    //     }
    

    //     getCurrentPlayer() {

    //         // check whether to opponent has any moves. Count only, without assigning the actual cells
    //         var allowedCellsCount = this.calculateAllowedCells(); 
            
    //         if (!allowedCellsCount) {
    //             this.setState({
    //                 lostTurn:true
    //             });
    
    //             return this.state.currentPlayer;
            
    //         }
            
    //         return this.state.currentPlayer==='white'?'black':'white';
    //     }
    // }
    
    Game.propTypes = {
        currentPlayer: PropTypes.string.isRequired
      }

    export default Game;