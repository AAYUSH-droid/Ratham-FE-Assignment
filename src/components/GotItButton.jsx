import { useState, useEffect } from "react";
import "../App.css"
const GotItButton = (props) => {
  const [gotItDone, setGotItDone] = useState(false);
  const initialAction = () => {
    props.actions.initialAction();
    document.getElementById("gotItButton").style.display = "none";
    setGotItDone(true);
  };
  const afterGotIt = () => {
    props.actions.afterGotIt();
  };
  useEffect(() => {
    if (gotItDone === true) {
      afterGotIt();
    }
  }, [gotItDone]);
  return (
    <div id="gotItButton" onClick={() => initialAction()}>
      Got it
    </div>
  );
};

export default GotItButton;
