import "./App.css";
import GridLayout from "./components/gridLayout";
import Header from "./components/Header";
import Information from "./components/Information";

function App() {
  return (
    <>
      <main>
        <Header/>
        <GridLayout />
        <Information/>
      </main>
    </>
  );
}

export default App;
