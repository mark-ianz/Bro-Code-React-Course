import { useState } from "react";

export default function ArrayState () {
  let [list, setList] = useState ([]);

  function handleListSubmit (event) {

    
    function handleEnterSubmit () {
      const inputValue = event.target.value.trim();

      if (inputValue !== "")
      setList ((l) => [...list, inputValue]);
      event.target.value = "";
    }

    function handleClickSubmit () {
      const input = document.querySelector ("#input").value.trim();
      if (input != "") {
        setList ((l) => [...list, input]);
        document.querySelector ("#input").value = "";
      }
    }

    /* Enter Submission */
    if (event.key === "Enter") {
      handleEnterSubmit ();
    }

    /* Click Submission */
    if (event.type === "click") {
      handleClickSubmit ();
    }
  }

  function handleRemoveFood (indexToRemove) {
    setList (l => {
      const updatedList = list.filter ((_,index)=> index !== indexToRemove);
      return updatedList
    })
  }

  return (<>
    <h1>
      Favorite food list.
    </h1>
    {list.length === 0 && "Add your favorite foods."}
    <ul className="food-list">
      {list.map ((food, index)=> (
        <div key={index} className="listed-food-container">
          <li className="listed-food" key={food}>
            {food}
          </li>
          <button className="remove-food-button" onClick={()=> {handleRemoveFood (index)}}>
            x
          </button>
        </div>
      ))}
    </ul>



    <input type="text" id="input" onKeyUp={handleListSubmit} placeholder="Input your favorite food."/>
    <button onClick={handleListSubmit}>
      Add Food
    </button>
  </>);
}