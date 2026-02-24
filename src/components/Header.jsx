import { useGameContext } from "../contextProvider/GameContext";
import "../App.css"
import WonMeassage from "./WonMeassage";

 const Header = () => {
  const { clicks, isGameOver } = useGameContext();
  return (
    <div className="header">
      <h1>Find the Secret Color</h1>
      <p>Total Clicks: {clicks}</p>
      {isGameOver ? <WonMeassage/>:<h3>Keep Searching..</h3>}
    </div>
  );
};

export default Header