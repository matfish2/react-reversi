import React, { Component } from 'react';
import './Disk.css';

class Disk extends Component {
    
    render() {
        return (
          <span className="Disk" style={this.color()}></span>
        );
    }

    color() {
        return {
            backgroundColor:this.props.color
        }
    }
}

export default Disk;