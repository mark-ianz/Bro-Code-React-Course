import { useRef, useState } from "react";

export default function UseRef() {

  const [value, setValue] = useState (0)

  const xRef = useRef (0)

  function handleClick () {
    event.target.style.backgroundColor = "red";
    xRef.current++;
    console.log(xRef.current);
  }

  function reloadDOM () {
    setValue (v => v + 1);
  }

  return <>
    <p>Hello</p>
    <button onClick={handleClick}>
      Click me {xRef.current}
    </button>
    <br />
    <br />
    <button onClick={reloadDOM}>
      Click me to reload DOM {value}
    </button>

 
  </>;
}
