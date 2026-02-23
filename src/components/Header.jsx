import { useGameContext } from "../contextProvider/GameContext";
import "../App.css"

 const Header = () => {
  const { clicks, isGameOver } = useGameContext();
  return (
    <div className="header">
      <h1>Find the Secret Color</h1>
      <p>Total Clicks: {clicks}</p>
      {isGameOver && <h2 className="game-over-msg">You Won! 🏆</h2>}
    </div>
  );
};

export default Header