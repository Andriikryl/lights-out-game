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
            <div key={`${rowIndex}-${colIndex}`}>
              {rowIndex}
              {colIndex}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
