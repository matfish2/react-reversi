import React from 'react';
import './Board.css';
import Cell from '../../state/containers/Cell';

const Board = ({board, newest, player}) => {
    
    const renderRow = (row, x) => {
        return row.map((cell, y)=><Cell key={y} data={cell} newest={newest} position={[x,y]}/>)
    }

        return (
            <div className="Board">
                <table className="table table-bordered">
                    <tbody> 
                    {board.map((row, x)=><tr key={x}>{renderRow(row, x)}</tr>)}
                    </tbody>
                </table>
        </div>
        );
   
   
}

export default Board;