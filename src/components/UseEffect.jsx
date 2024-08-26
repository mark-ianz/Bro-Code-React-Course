import { useEffect, useState } from "react";

export default function UseEffect() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener ("resize", ()=> {
      setHeight((h) => window.innerHeight);
      setWidth((w) => window.innerWidth);
  
    })
  }, [window.innerWidth, window.innerHeight]);

  return (
    <>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </>
  );
}
