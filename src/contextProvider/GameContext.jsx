
import { createContext, useState, useEffect, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [targetIndex, setTargetIndex] = useState(null); 
  const [secretColor, setSecretColor] = useState(''); 
  const [clickedIndices, setClickedIndices] = useState([]); 
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * 100);
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setTargetIndex(randomIdx);
    setSecretColor(randomColor);
  }, []);

  const value = {
    targetIndex,
    secretColor,
    clickedIndices,
    setClickedIndices,
    isGameOver,
    setIsGameOver,
    clicks: clickedIndices.length
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => useContext(GameContext);