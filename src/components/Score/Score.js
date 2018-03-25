import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
    
    render() {        
        return (
            <div className={`Score Score--${this.props.player}`}>
            <span>{this.props.score}</span>            
            </div>
        )
    }
}

export default Score;