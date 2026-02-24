import Cell from "./Cell";

const Grid = () => {
  return (
    <div className="grid">
      {Array.from({ length: 100 }).map((_, i) => (
        <Cell key={i} index={i} />
      ))}
    </div>
  );
};

export default Grid;
