import { useGameLogic } from "../hooks/useGameLogic";
import { useGameContext } from "../contextProvider/GameContext";

const Cell = ({ isClicked, isTarget, index }) => {
  const { secretColor } = useGameContext();
  const { handleCellClick } = useGameLogic();
  return (
    <div
      key={index}
      className={`cell ${isClicked ? "clicked" : ""}`}
      onClick={() => handleCellClick(index)}
      style={isClicked && isTarget ? { backgroundColor: secretColor } : {}}
    >
      {index}
      {isClicked && (isTarget ? "🎨" : "X")}
    </div>
  );
};

export default Cell;
