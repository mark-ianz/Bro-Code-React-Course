import { useState } from "react";

export default function List (props) {
  const itemList = props.list ? props.list : [];

  const [selectedList, setSelectedList] = useState (-1);
  const [isSortedByName, setSortName] = useState (false);
  const [isSortedByStats, setSortStats] = useState (false);
  let [sortedList, setSortedList] = useState (itemList)

  const list = sortedList.map ((item)=> {
    return <li className= {getClassName (item.id)}
      key={item.id} 
      onClick={()=> {handleListClick (item.id)}}>
        <p className="fw-bold">
          {item.name}
        </p>
        {item.calories && <p>Calories: {item.calories}</p>}
        {item.rating && <p>Rating: {item.rating}</p>}
    </li>
  })

  function getClassName (id) {
    return id === selectedList 
      ? "list-group-item list-group-item-action active" 
      : "list-group-item list-group-item-action"
  }

  function handleListClick (id) {
    if (id === selectedList) {
      setSelectedList (-1);
    } else {
      setSelectedList (id);
    }
  }

  function sortedBy () {
    if (isSortedByName) {
      return <>
        <p>
          Sorted by <span className="fw-bold">Name</span>
        </p>
      </>
    } else if (isSortedByStats) {
      return <>
        {itemList [itemList.length - 1].calories && <p>Sorted by <span className="fw-bold">Calories</span></p>}
        {itemList [itemList.length - 1].rating && <p>Sorted by <span className="fw-bold">Rating</span></p>}
      </>
    } else {
      return <p>Sorted by <span className="fw-bold">Default</span></p>
    }
  }

  function sortByName () {
    if (isSortedByName) {
      setSortName (false)
      setSortedList ([...itemList]);
    } else {
      const sorted = ([...itemList].sort((a,b)=> a.name.localeCompare (b.name)))
      setSortedList (sorted)
      setSortName (true)
    }
    setSortStats (false)
  }

  function sortByStats () {
    if (isSortedByStats) {
      setSortStats (false)
      setSortedList ([...itemList]);
    } else {
      let sorted;
      itemList [itemList.length - 1].calories ? sorted = ([...itemList].sort((a,b)=> b.calories - a.calories)) : "";
      itemList [itemList.length - 1].rating ? sorted = ([...itemList].sort((a,b)=> b.rating - a.rating)) : "";
      setSortedList (sorted)
      setSortStats (true)
    }
    setSortName (false)
  }

  return <>
    <div className="container">
      <h1>{props.title}</h1>
      <p>{props.subtext}</p>
      <ul className="list-group" style={{marginBottom: "10px"}}>
        {props.list ? list : <p className="alert alert-danger">Error</p>}
      </ul>
      {props.list && sortedBy ()}
      {props.list && 
      <div className="button-container">
        <button className={isSortedByName ? "btn btn-primary active" : "btn btn-primary"} onClick={()=> sortByName ()}>
          Sort by name
        </button>
        <button className={isSortedByStats ? "btn btn-primary active" : "btn btn-primary"} onClick={()=> sortByStats ()}>
          {itemList [itemList.length - 1].calories && <p>Sort by Calories</p>}
          {itemList [itemList.length - 1].rating && <p>Sort by Rating</p>}
        </button>
      </div>
      }
    </div>
  </>
}



List.defaultProps = {
  title: "Title",
  subtext: "Subtext"
}