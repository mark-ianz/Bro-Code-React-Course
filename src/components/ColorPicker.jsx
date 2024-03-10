import { useState } from "react"

export default function ColorPicker () {

  const [color, setColor] = useState ("#000000")

  function handleColorChange (e) {
    setColor (e.target.value)
  }

  function copyToClipboard () {
    navigator.clipboard.writeText (color);
    alert (`Color ${color} copied to clipboard succesfully!`)
  }

  return <>
    <div className="color-picker-container">
      <h1>
        Color Picker
      </h1>
      <div className="color-display" style={{backgroundColor : color}}>
        <p onClick={copyToClipboard}>
          {color}
        </p>
      </div>
      <label htmlFor="color" className="color-picker">
        Select a Color:
        <input type="color" name="color" id="color-picker" value={color} onChange={handleColorChange}/>
      </label>
    </div>
  </>
}