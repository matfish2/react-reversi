import React, { Component } from 'react';
import Disk from '../Disk/Disk';
import './Cell.css';

class Cell extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
      }
  
      
    render() {
        return (
          <td className={this.classes()} onMouseEnter={this.setHoverState.bind(this, true)} onMouseLeave={this.setHoverState.bind(this,false)} onClick={this.reverse.bind(this)}>{this.cellContent()}</td>
        );
    }

    cellContent() {        
        return <Disk color={this.diskColor()} />
    }

    setHoverState(hovered) {
        if (this.props.data.canReverse.length) {
            this.setState({hovered});
        }
    }

    isNewest() {
      return this.props.newest && this.props.newest[0] === this.props.position[0] && this.props.newest[1] === this.props.position[1];  
    }

    classes() {
        let cls = 'Cell ';
        let cell = this.props.data;
        cls+= cell.disk?'Cell--occupied':'Cell--vacant';
        if (cell.canReverse.length) cls+=' Cell--allowed';
        if (this.isNewest()) cls+=' Cell--newest';

        return cls;
    }

    diskColor() {
        var cell = this.props.data;
        
        if (cell.disk) return cell.disk;

        if (this.state.hovered) return this.props.player;

        return null;
    }

    reverse() {

        if (this.props.data.canReverse.length===0) return;

        var x = this.props.position[0];
        var y = this.props.position[1];
        this.props.reverse(x, y);
    }

}

export default Cell;