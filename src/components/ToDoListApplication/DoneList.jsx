import ReArrangeContainer from "./ReArrangeButtons/ReArrangeContainer";
import LeOptionContainer from "./ListElementOptionContainer/LeOptionContainer";

export default function DoneList(props) {
  return (
    <li className="list-element">
      <ReArrangeContainer />

      <div className="done-input">
        <p className="list-input marked-text">{props.listValue}</p>
        <div className="list-modal done-modal">
          <p>Click to mark as unfinished</p>
        </div>
        <span></span>
      </div>
      <LeOptionContainer delete={props.handleDeleteList} editClick ={props.handleEditButtonClick}/>
    </li>
  );
}
