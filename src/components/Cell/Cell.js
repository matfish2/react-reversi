import React from 'react';
import Disk from '../Disk/Disk';
import './Cell.css';

const Cell = ({data, newest, position, player, reverse, toggleHoverState}) => {
    
    const isNewest = () => {
        return newest && newest[0] === position[0] && newest[1] === position[1];  
    }
    
    const classes = ()=> {
        let cls = 'Cell ';
        let cell = data;
        cls+= cell.disk?'Cell--occupied':'Cell--vacant';
        if (cell.canReverse.length) cls+=' Cell--allowed';
        if (isNewest()) cls+=' Cell--newest';
        
        return cls;
    }
    
    const toggleHover = () => {
        if (data.disk || !data.canReverse.length) return;
        toggleHoverState();
    }
    
    const diskColor = () => {
        var cell = data;
        
        if (cell.disk) return cell.disk;
        
        if (cell.hovered) return player;
        
        return null;
    }
    
    return (
        <td className={classes()} 
        onMouseEnter={toggleHover} 
        onMouseLeave={toggleHover}  
        onClick={reverse}>
        <Disk color={diskColor()} />
        </td>
    )
    
}


export default Cell;