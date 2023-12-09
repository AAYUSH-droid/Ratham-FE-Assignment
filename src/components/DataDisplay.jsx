import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";
const DataDisplay = () => {
  const navigate = useNavigate();
  const { name, age } = useSelector((store) => store.data);

  const goHome = () => {
    navigate("/");
  };
  return (
    <div className="info_display">
      <h1>
        Your name <span className="data">{name}</span> aged{" "}
        <span className="data">{age}</span> has added to the student system. <br /> You
        may now exit. 
      </h1>
      <button className="btn-exit" onClick={goHome}>
        exit
      </button>
    </div>
  );
};

export default DataDisplay;
