import React, { Component } from 'react';
import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      status:'active',
      winner:null
    }
  }
  
  render() {
    
    let game = this.state.status==='active'?<Game end={this.endGame.bind(this)}/>:''; 
    let gameOver = this.state.status==='over'?<GameOver winner={this.state.winner} restart={this.restartGame.bind(this)}/>:'';  

    return (
      <div className="App">
      <h1>Reversi</h1>
      {game}
      {gameOver}
      </div>
    );
  }
  
  restartGame() {
    this.setState({
      status:'active',
    })
  }
  
  endGame(winner) {
    this.setState({
      status:'over',
      winner
    })
  }
}

export default App;
