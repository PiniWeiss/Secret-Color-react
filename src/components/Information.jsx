import { useContext } from "react";
import { InformationContext } from "../contextProvider/InformationProvider";
import "../App.css";

function Information({ count }) {
  const { message } = useContext(InformationContext);

  return (
    <div className="information">
      <h2>
        Clicks: <span> {count}</span>
      </h2>
      <hr />
      <p
        className={
          message !== "You Made It!!" ? "game-status" : "success-message"
        }
      >
        {message}
      </p>
    </div>
  );
}

export default Information;
