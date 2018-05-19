import React from 'react';
import './Score.css';

const Score = ({score,player}) => (
    <div className={`Score Score--${player}`}>
    <span>{score}</span>            
    </div>
)


export default Score;