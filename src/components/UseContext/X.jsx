import { useContext } from "react";

import { favColorContext } from "./A"

export default function X () {
  const favColor = useContext (favColorContext);


  return <>
    <p>
      Component X
    </p>
    {favColor}

  </>
}