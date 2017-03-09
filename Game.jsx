import React from 'react';
import Board from './Board.jsx';

class Game extends React.Component {
  constructor() {
      super();
      this.state = {
          history: [{
              squares: Array(9).fill(null)
          }],
          stepNumber: 0,
          isXNext: true
      };
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    //const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + this.state.isXNext ? 'X' : 'O';
    }

    const moves = history.map((step, move) => {
        const desc = move ? 'Move #' + move : 'Game start';
        let bold = '';
        if (move === this.state.stepNumber && this.state.history.length != (this.state.stepNumber+1)) {
            bold = 'text-danger';
        }
        //console.log("Move/Step: " + move + " / " + JSON.stringify(step));
        return (
            <li key={move} className={bold}><a href='#' onClick={()=>this.jumpTo(move)}>{desc}</a></li>
        );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i)=>this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
  handleClick(i) {
    console.log('you clicked on ' + i);
    const history = this.state.history;
    const current = history[history.length - 1];
    const values = current.squares.slice();
    const nextValue = !this.state.isXNext;
    if (calculateWinner(values) || values[i]) {
        return;
    }
    values[i] = nextValue ? 'O' : 'X';
    this.setState({
        history: history.concat([{squares: values}]), 
        isXNext: nextValue,
        stepNumber: history.length
    });
    console.log('marking ' + values[i] + ' at ' + i);
  }
  jumpTo(step) {
      console.log('do i jump to ' + step);
      this.setState({
          stepNumber: step,
          isXNext: (step % 2 == 0) ? true : false
      })
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
