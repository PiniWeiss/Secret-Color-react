import { useGameContext } from "../contextProvider/GameContext";
import Cell from "./Cell";

const Grid = () => {
  const { targetIndex, clickedIndices } = useGameContext();
console.log(targetIndex)
  return (
    <div className="grid">
      {Array.from({ length: 100 }).map((_, i) => {
        const isClicked = clickedIndices.includes(i);
        const isTarget = i === targetIndex;
        return (
          <Cell key={i} isClicked={isClicked} isTarget={isTarget} index={i} />
        );
      })}
    </div>
  );
};

export default Grid;
