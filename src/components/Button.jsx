import { useState } from "react";

export default function Button () {

  const [isHurt, setIsHurt] = useState ();
  let [clickTimes, setClickTimes] = useState (0);

  const handleClick = () => {
    setClickTimes (clickTimes+ 1)
    setIsHurt (true);
  };

  function handleHealClick () {
    setClickTimes (0);
    setIsHurt (false);
  }

  return <>
    <button className={isHurt ? "btn btn-danger" : "btn btn-primary"} onClick={(e)=> handleClick (e)}>
      {isHurt ? `Ouch! 😥 x${clickTimes}` : "Click Me! 😁"}
      
    </button>
    {isHurt && 
      <button className="btn btn-success" onClick={handleHealClick}>
        Heal Me! 👼
      </button>}
  </>
}