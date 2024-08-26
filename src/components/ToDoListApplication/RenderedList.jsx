import ReArrangeContainer from "./ReArrangeButtons/ReArrangeContainer";
import LeOptionContainer from "./ListElementOptionContainer/LeOptionContainer";

export default function RenderedList(props) {
  return (
    <li className="list-element">
      <ReArrangeContainer/>
      <div className="rendered-input">
        <p className="list-input">{props.listValue}</p>
        <div className="list-modal rendered-modal">
          <p>Click to mark as done</p>
        </div>
      </div>
      <LeOptionContainer delete={props.handleDeleteList} editClick ={props.handleEditButtonClick}/>
    </li>
  );
}
