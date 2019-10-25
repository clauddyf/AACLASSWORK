import React from 'react';
import ReactDOM from 'react-dom';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false,
      bombed: false,
      flagged: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      revealed: true
    });
    this.props.updateGame(this.props.tile);
  }

  getBombCount() {
    return this.props.tile.adjacentBombCount();
  }

  isRevealed() {
    return this.state.revealed;
  }

  isBomb() {
    return this.props.tile.bombed;
  }



  show() {
    if (this.isBomb()) {
      return '\ud83d\udca3';
    }

    if (this.getBombCount() > 1) {
      return `${this.getBombCount()}`;
    }
  }


  render() {
  //  debugger
    return (
      <div className="tile" onClick= {this.handleClick}>
        {this.isRevealed() && this.getBombCount() >= 1 ? this.show(): " "}
      </div>
    );
  }
}

export default Tile;