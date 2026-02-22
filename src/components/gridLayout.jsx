import '../app.css'

function GridLayout() {
  const gridArray = Array(100).fill(null);

  return (
    <div id="grid-board">
      {gridArray.map((_, index) => (
        <div key={index} className="square"></div>
      ))}
    </div>
  );
}

export default GridLayout;
