import { useGameContext } from "../contextProvider/GameContext";
import "../App.css"
import WonMeassage from "./WonMeassage";

 const Header = () => {
  const { clicks, isGameOver } = useGameContext();
  return (
    <div className="header">
      <h1>Find the Secret Color</h1>
      <p>Total Clicks: {clicks}</p>
      {isGameOver ? <WonMeassage/>:clicks>0 ?<h3>Keep Searching..</h3>: <h2>Start Clicking</h2>}
    </div>
  );
};

export default Header