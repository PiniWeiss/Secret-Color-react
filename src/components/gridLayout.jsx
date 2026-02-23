import "../app.css";

function GridLayout({ incement }) {
  const gridArray = Array(100).fill(null);

  function press(e) {
    if (!e.target.className.includes("square-revealed")) {
      incement();
      e.target.className = "square-revealed";
    }
    if(e.target.className.includes("secret-color")){e.target.className = "secret-color-expolre"}
  }
  gridArray[10] = "secret-color"

  return (
    <div id="grid-board">
      {gridArray.map((square, index) => (
        
        <div onClick={press} key={index} className={square === "secret-color"? "secret-color square": "square"} ></div>
      ))}
    </div>
  );
}

export default GridLayout;
