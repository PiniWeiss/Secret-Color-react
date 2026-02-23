import './App.css';
import { GameProvider, useGameContext } from './contextProvider/GameContext';
import Grid from './components/gridLayout';
import Header from './components/Header';



function App() {
  return (
    <GameProvider>
      <div className="game-container">
        <Header/>
        <Grid />
      </div>
    </GameProvider>
  );
}

export default App;