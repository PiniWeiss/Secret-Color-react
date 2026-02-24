import { createContext, useState, useEffect, useContext, useRef } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [targetIndex, setTargetIndex] = useState(null);
  const [clickedIndices, setClickedIndices] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const secretColorRef = useRef(
    `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  );

  useEffect(() => {
    setTargetIndex(Math.floor(Math.random() * 100));
  }, []);

  const value = {
    targetIndex,
    secretColor: secretColorRef.current,
    clickedIndices,
    setClickedIndices,
    isGameOver,
    setIsGameOver,
    clicks: clickedIndices.length,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => useContext(GameContext);
