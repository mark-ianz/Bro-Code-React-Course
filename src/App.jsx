/* import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

let foodList = {
  title: 'Food',
  subtext: 'Select your favorite food',
  list: [{id:1, name: "Banana", calories: 96}, {id:2, name: "Orange", calories: 25}, {id:3, name: "Apple", calories: 89}]
}

let moviesList = {
  title: 'Movies',
  subtext: 'Select your favorite movie',
  list: [
    {id: 1,name: "Interstellar", rating: 10},
    {id: 2,name: "Don't Breath", rating: 8.6},
    {id: 3,name: "The Martian", rating: 9.1},
    {id: 4,name: "Buried", rating: 7.5},
    {id: 5,name: "Avengers: Infinity War", rating: 10},
    {id: 6,name: "Your Name", rating: 10}
  ]
}

function App () {
  return <>
    <Header/>
    <List title= {foodList.title} subtext= {foodList.subtext} list= {foodList.list}/>
    <br />
    {<List title= {moviesList.title} subtext= {moviesList.subtext} list= {moviesList.list}/>}
    <Footer/>
  </>
} */



/* import Card from "./components/Card";

function App () {

  let cards = [{
    card_title: "Kai Sotto",
    card_text: "President of the Philippines"
  },{
    card_title: "Kai Sotto1",
    card_text: "President of the Philippines"
  },{
    card_title: "Kai Sotto2",
    card_text: "President of the Philippines"
  }]

  return <>
    {cards.forEach ((card)=> {
      return <p>asdas</p>
    })}
  </>
} */

/* import Student from "./components/Student";
function App () {
  return <>
    <Student name="Mark Ian" age={19} isStudent={false}/>
    <Student name="Aira Leah" age={19} isStudent={false}/>
    <Student/>
  </>
} */

/* import Button from "./components/Button";
function App () {
  return <>
    <Button/>
  </>
} */
/* import Form from "./components/Form"; */
/* function App () {
  return <>
    <Form/>
  </>
} */

/* import ColorPicker from "./components/ColorPicker";
function App () {
  return <>
    <ColorPicker/>
  </>
} */

/* import Rest from "./components/Rest";
function App () {
  return <>
    <Rest></Rest>
  </>
} */

/* import ArrayState from "./components/ArrayState";
function App () {
  return <>
    <ArrayState/>
  </>
  
}*/

/* import ObjectInsideArray from "./components/ObjectInsideArray";
function App () {
  return <>
    <ObjectInsideArray/>
  </>
} */

/* import './css/ToDoList/main.css'
import ToDoList from "./components/ToDoListApplication/toDoList";
function App () {
  return <ToDoList/>
} */

/* import UseEffect from './components/UseEffect';
function App () {
  return <UseEffect/>
}  */

/* import DigitalClock from "./components/DigitalClock";
function App () {
  return <DigitalClock/>
} */

/* import A from "./components/UseContext/A";
function App () {
  return <><A></A></>
} */

/* import UseRef from "./components/UseRef";
function App () {
  return <UseRef/>
}*/

import StopWatch from "./components/StopWatch";
import './css/StopWatch.css';
function App () {
  return <StopWatch/>
}

export default App;
