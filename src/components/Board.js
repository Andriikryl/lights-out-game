import { useState } from "react";
import Cell from "./Cell";

const Board = ({ size }) => {
  const createGrid = () =>
    new Array(size)
      .fill()
      .map((r) => new Array(size).fill().map((c) => Math.random() < 0.4));
  const [board, setBoard] = useState(createGrid());

  const toggleLight = (row, col) => {
    const copy = [...board.map((r) => [...r])];

    copy[row][col] = !copy[row][col];
    if (row < size - 1) {
      copy[row + 1][col] = !copy[row + 1][col];
    }
    if (row > 0) {
      copy[row - 1][col] = !copy[row - 1][col];
    }
    if (row < size - 1) {
      copy[row][col + 1] = !copy[row][col + 1];
    }
    if (row > 0) {
      copy[row][col - 1] = !copy[row][col - 1];
    }
    setBoard(copy);
  };

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
