import { useGameContext } from '../contextProvider/GameContext';
import { useGameLogic } from '../hooks/useGameLogic';

const Grid = () => {
  const { targetIndex, secretColor, clickedIndices } = useGameContext();
  const { handleCellClick } = useGameLogic();

  return (
    <div className="grid">
      {Array.from({ length: 100 }).map((_, i) => {
        const isClicked = clickedIndices.includes(i);
        const isTarget = i === targetIndex;

        return (
          <div
            key={i}
            className={`cell ${isClicked ? 'clicked' : ''}`}
            onClick={() => handleCellClick(i)}
            style={isClicked && isTarget ? { backgroundColor: secretColor } : {}}
          >
            {i}
            {isClicked && (isTarget ? '🎨' : 'X')}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;