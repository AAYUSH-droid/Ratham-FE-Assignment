import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Exit = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(change, 1000, 0);
    setTimeout(()=>{
        clearInterval(interval);
    },5000)
    return ()=>{
        clearInterval(interval);
    }
  },[]);
  useEffect(()=>{
    if(count === 0){
        navigate("/data");
    }
  })
  const change = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return <div className="countr">
    {count}...
  </div>;
};

export default Exit;
