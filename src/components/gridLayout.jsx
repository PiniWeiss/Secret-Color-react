import { useContext } from "react";
import "../app.css";
import { InformationContext } from "../contextProvider/InformationProvider";

const numberRandom = Math.floor(Math.random() * 100);
function GridLayout({ incement }) {
  const gridArray = Array(100).fill(null);
  const { keepSearching, success } = useContext(InformationContext);

  function press(e) {
    if (+e.target.id === numberRandom) {
      e.target.className = "secret-color";
    }
    if (!e.target.className.includes("square-revealed")) {
      if (e.target.className.includes("secret-color")) {
        e.target.className = "secret-color-expolre";

        success();
      } else {
        incement();
        e.target.className = "square-revealed";
        keepSearching();
      }
    }
  }

  return (
    <div id="grid-board">
      {gridArray.map((square, index) => (
        <div
          onClick={press}
          key={index}
          id={index}
          className={
            square === "secret-color" ? "secret-color square" : "square"
          }
        ></div>
      ))}
    </div>
  );
}

export default GridLayout;
