import './App.css';
import { GameProvider} from './contextProvider/GameContext';
import Grid from './components/gridLayout';
import Header from './components/Header';



function App() {
  return (
    <GameProvider>
      <main>
      <div className="game-container">
        <Header/>
        <Grid />
      </div></main>
    </GameProvider>
  );
}

export default App;