import { useContext, useState } from "react"
import { favColorContext } from "./A"

export default function C () {

  const favColor = useContext (favColorContext);

  return <>
    <p>
      Component C
    </p>
    {favColor}
  </>
}