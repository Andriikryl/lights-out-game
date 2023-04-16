import { useState } from "react";

const Board = () => {
  const createGrid = () =>
    new Array(5)
      .fill()
      .map((r) => new Array(5).fill().map((c) => Math.random() < 0.4));
  const [board, setBoard] = useState(createGrid());

  return (
    <div className="Board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <button className="board-item" key={`${rowIndex}-${colIndex}`}>
              {rowIndex}
              {colIndex}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
