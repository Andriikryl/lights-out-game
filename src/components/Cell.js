const Cell = ({ rowIndex, colIndex, isOn }) => {
  return (
    <button className={isOn ? "on" : "off"} key={`${rowIndex}-${colIndex}`}>
      {rowIndex}
      {colIndex}
    </button>
  );
};

export default Cell;
