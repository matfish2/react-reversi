import React, { Component } from 'react';
import Game from './components/Game/Game';
import GameOver from './components/GameOver/GameOver';
import Logo from './logo.png'
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      status:'active',
      winner:null, 
      whiteScore:0,
      blackScore:0
    }
  }
  
  render() {
    
    let game = this.state.status==='active'?<Game end={this.endGame.bind(this)}/>:''; 
    let gameOver = this.state.status==='over'?<GameOver 
    winner={this.state.winner} 
    restart={this.restartGame.bind(this)}
    white={this.state.whiteScore}    
    black={this.state.blackScore}
    />:'';  

    return (
      <div className="App">
      <img src={Logo} alt="reversi"/>
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
  
  endGame(winner, whiteScore, blackScore) {
    this.setState({
      status:'over',
      winner,
      whiteScore,
      blackScore
    })
  }
}

export default App;
