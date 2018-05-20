import React from 'react';
import './Disk.css';

const style = (color) => {

    if (!color) return '';
    
        return {
            backgroundColor:color
        }
}

const Disk = ({color})=> (
    <span className="Disk" style={style(color)}></span>
)

export default Disk;