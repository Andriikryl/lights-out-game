import { useState } from "react";
import Cell from "./Cell";

const Board = () => {
  const createGrid = () =>
    new Array(5)
      .fill()
      .map((r) => new Array(5).fill().map((c) => Math.random() < 0.4));
  const [board, setBoard] = useState(createGrid());

  const toggleLight = (row, col) => {};

  return (
    <div className="Board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              toggleLight={toggleLight}
              isOn={board[rowIndex][colIndex]}
              rowIndex={rowIndex}
              colIndex={colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
