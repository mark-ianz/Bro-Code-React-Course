import { createContext, useState } from "react"
import B from "./B"
import X from "./X"

export const favColorContext = createContext ();

export default function A () {

  const [favColor, setFavColor] = useState ("Red")

  return <>
    <p>
      My favorite color is
    </p>
    <favColorContext.Provider value={favColor}>
      <B></B>
    </favColorContext.Provider>
    <X></X>    


  </>
}