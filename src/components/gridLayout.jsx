import "../app.css";

function GridLayout({ incement }) {
  const gridArray = Array(100).fill(null);

  function press(e) {
    if (!e.target.className.includes("square-revealed")) {
      incement();
      e.target.className = " square-revealed";
    }
  }

  return (
    <div id="grid-board">
      {gridArray.map((_, index) => (
        <div onClick={press} key={index} className="square"></div>
      ))}
    </div>
  );
}

export default GridLayout;
