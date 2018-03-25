import React, { Component } from 'react';
import './Board.css';
import Cell from '../Cell/Cell';

class Board extends Component {
    
    render() {
        
        return (
            <div className="Board">
                <table className="table table-bordered">
                    <tbody> 
                    {this.props.board.map((row, x)=><tr key={x}>{this.renderRow(row, x)}</tr>)}
                    </tbody>
                </table>
        </div>
        );
    }

    renderRow(row, x) {
        return row.map((cell, y)=><Cell key={y} data={cell} newest={this.props.newest} reverse={this.props.reverse} player={this.props.player} position={[x,y]}/>)
    }

}

export default Board;