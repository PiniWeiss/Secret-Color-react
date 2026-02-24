import { useGameContext } from '../contextProvider/GameContext';

export const useGameLogic = () => {
  const { targetIndex, clickedIndices, setClickedIndices, setIsGameOver, isGameOver } = useGameContext();

  const handleCellClick = (index) => {
    if (isGameOver || clickedIndices.includes(index)) return;

    const newClicked = [...clickedIndices, index];
    setClickedIndices(newClicked);

    if (index === targetIndex) {
      setIsGameOver(true);
    }
  };

  return { handleCellClick };
};