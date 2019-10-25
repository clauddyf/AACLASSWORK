import React from 'react';
import ReactDOM from 'react-dom';
import {Board} from '../minesweeper';
import BoardComponent from './board';


class Game extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      board: new Board(9, 9),  
    };
    this.updateGame = this.updateGame.bind(this);
  }
  
  updateGame(tile) {
    tile.explore();
    this.setState({ board: this.state.board });
  }

  // winner() {
  //   return this.board.wi
  // }

  render() {
    // debugger
    return (
      <div>
        <BoardComponent board = {this.state.board} updateGame = {this.updateGame} />
         {/* <span>{this.board}</span> */}
      </div>
    );
  }
}

export default Game;