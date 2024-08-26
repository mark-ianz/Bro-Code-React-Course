import { useEffect,useState } from "react";

export default function DigitalClock() {

  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const intervalID = setInterval (()=> {
      setTime (t => new Date ());
    }, 1000)

    return ()=> {
      clearInterval (intervalID)
    }
  }, []);

  function formatTime (time) {
    let hours = time.getHours()+3;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "P.M" : "A.M";

    if (hours >= 12) hours = hours-12;

    function padZero (number) {
      return (number >= 10 ? "" : "0") + number
    } 

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
  }

  return (
    <>
      <p>
        {formatTime (time)}
      </p>
    </>
  );
}
