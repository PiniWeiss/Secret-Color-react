function gridLayout() {
  const gridArray = Array(100);
  return (
    <div id="grid-board">
      {gridArray.map((_, index) => {
        <div key={index} className="square"></div>;
      })}
    </div>
  );
}

export default gridLayout;
