import { useState } from "react";

export default function Rest() {
  const [info, setInfo] = useState({
    name: "Mark Ian",
    age: 19,
    favColor: "Black",
  });

  function handleInfoNameChange (event) {
    setInfo (i => ({...info, name: event.target.value}));
  }

  function handleInfoAgeChange (event) {
    setInfo (a => ({...info, age: event.target.value}));
  }

  function handleInfoFavColorChange (event) {
    setInfo (fc => ({...info, favColor: event.target.value}));
  }

  
  return (
    <>
      <input type="text" name="name" placeholder="Name"  value={info.name} onChange={handleInfoNameChange}/>
      <br />
      <input type="number" name="age" placeholder="Age"  value={info.age} onChange={handleInfoAgeChange}/>
      <br />
      <select name="favcolor" onChange={handleInfoFavColorChange} value={info.favColor}>
        <option value="">Favorite Color</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Yellow">Yellow</option>
        <option value="Black">Black</option>
      </select>

      <p>
        My name is {info.name} and I am {info.age} years old. My favorite color is {info.favColor}.
      </p>
    </>
  );
}
