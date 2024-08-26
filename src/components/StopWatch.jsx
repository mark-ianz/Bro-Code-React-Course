import { useEffect, useRef, useState } from "react";

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    if (isRunning) {
      setInterval(() => {
        setMilliseconds((m) => {
          if (m > 100) {
            setSeconds((s) => s + 1);
            return 0;
          } else {
            return m + 1;
          }
        });
      }, 10);
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  function padZero(time) {
    return (time >= 10 ? "" : "0") + time;
  }

  return (
    <div id="stopwatch-container">
      <div id="time">
        {`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${padZero(
          milliseconds
        )}`}
      </div>
      <div id="controls">
        <button className="button" id="start" onClick={start}>
          Start
        </button>
        <button className="button" id="stop" onClick={stop}>
          Stop
        </button>
        <button className="button" id="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
