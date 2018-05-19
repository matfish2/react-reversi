import React from 'react';
import Game from './state/containers/Game';
import GameOver from './state/containers/GameOver';
import Logo from './logo.png'
import './App.css';

const App = ({status, winner, whiteScore, blackScore}) => {

    let game = status==='active'?<Game/>:''; 
    
    let gameOver = status==='over'?<GameOver />:'';  

    return (
      <div className="App">
      <img src={Logo} alt="reversi"/>
      {game}
      {gameOver}
      </div>
    );
  }

  
export default App;
