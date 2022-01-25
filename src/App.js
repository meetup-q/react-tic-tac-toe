import React from "react";
import Board from "./Board";
import './tic-tac-toe.css';

// 這是 function component
function App() {
  return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>

  )
}

export default App;