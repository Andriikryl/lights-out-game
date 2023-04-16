const Cell = ({ rowIndex, colIndex, isOn, toggleLight }) => {
  const handleClick = () => toggleLight(rowIndex, colIndex);

  return (
    <button onClick={handleClick} className={isOn ? "on" : "off"}></button>
  );
};

export default Cell;
