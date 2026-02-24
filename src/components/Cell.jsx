import { useGameLogic } from "../hooks/useGameLogic";
import { useGameContext } from "../contextProvider/GameContext";

const Cell = ({ index }) => {
  const { targetIndex, clickedIndices, secretColor } = useGameContext();
  const { handleCellClick } = useGameLogic();
  const isClicked = clickedIndices.includes(index);
  const isTarget = index === targetIndex;
  return (
    <div
      key={index}
      className={`cell ${isClicked ? "clicked" : ""}`}
      onClick={() => handleCellClick(index)}
      style={isClicked && isTarget ? { backgroundColor: secretColor } : {}}
    >
      {isClicked && (isTarget ? "🎨" : "X")}
    </div>
  );
};

export default Cell;
