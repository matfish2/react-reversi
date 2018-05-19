import React from 'react';
import './Disk.css';

const style = (color) => {
        return {
            backgroundColor:color
        }
}

const Disk = ({color})=> (
    <span className="Disk" style={style(color)}></span>
)

export default Disk;