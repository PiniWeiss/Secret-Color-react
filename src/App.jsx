import "./App.css";
import GridLayout from "./components/gridLayout";
import Header from "./components/Header";
import Information from "./components/Information";
import InformationContextProvider from "./contextProvider/InformationProvider";
import { useCounter } from "./hooks/useCounter";

function App() {
  const { count, inc, reset } = useCounter(0);
  return (
    <>
      <main>
        <Header />
        <InformationContextProvider>
          <GridLayout incement={inc} />
          <Information count={count} />
        </InformationContextProvider>
      </main>
    </>
  );
}

export default App;
