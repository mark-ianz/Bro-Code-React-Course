import InputList from "./InputList";
import RenderedList from "./RenderedList";
import DoneList from "./DoneList";
import { useState } from "react";

export default function ToDoList() {
  const [list, setList] = useState([
    { state: "rendered", value: "Hello" },
    { state: "rendered", value: "Hehe" },
    { state: "input", value: "Hello" },
    { state: "done", value: "Hello" },
  ]);

  const [addInput, setAddInput] = useState("");
  const [addingState, setAddingState] = useState(false);

  const [editInput, setEditInput] = useState("");

  function handleEditButtonClick(index) {
    setList((l) => {
      const updatedList = [...l];

      updatedList[index] = { ...updatedList[index], state: "input" };

      return updatedList;
    });
  }

  function handleAddListClick() {
    setAddingState((as) => true);
  }

  function handleAddInput(index) { /* FIX THIS 😭🙏 */
    /* if (index != undefined && event.target.value.trim() !== "") {
      setEditInput((e) => event.target.value);
    } else if (index === undefined && addInput.trim() !== "") {
      setAddInput((a) => event.target.value);
    } */

    if (addInput.trim() !== "") {
      setAddInput((a) => event.target.value);
    }
  }

  function handleSaveButtonClick(index) {
    console.log(index);
    if (index != undefined) {
      setList((l) => {
        const updatedList = [...l];

        updatedList[index] = {
          ...updatedList[index],
          state: "rendered",
          value: editInput,
        };

        return updatedList;
      })
    } else if (addInput.trim() !== "") {
      setList((l) => [...l, { state: "rendered", value: addInput }]);
      setAddInput((ai) => "");
      setAddingState((as) => false);
    }
  }

  function handleCancelButtonClick() {
    setAddInput((a) => "");
    setAddingState((as) => false);
  }

  function handleDeleteList(index) {
    setList((l) => {
      const updatedList = [...l];
      return updatedList.filter((_, i) => i !== index);
    });
  }
  return (
    <>
    <p>{addInput}</p>
      <div id="main-container">
        <h1 id="title">To Do List</h1>
        <div id="body">
          <ul id="main-list">
            {list.map((item, index) => {
              switch (item.state) {
                case "input":
                  return (
                    <InputList
                      key={index}
                      listValue={item.value}
                      onChange={() => handleAddInput(index)}
                      onClickSaveButton={() => handleSaveButtonClick(index)}
                      onClickCancelButton={() => {
                        handleCancelButtonClick();
                      }}
                    />
                  );
                case "rendered":
                  return (
                    <RenderedList
                      key={index}
                      listValue={item.value}
                      handleDeleteList={() => {
                        handleDeleteList(index);
                      }}
                      handleEditButtonClick={() => {
                        handleEditButtonClick(index);
                      }}
                    />
                  );
                case "done":
                  return (
                    <DoneList
                      key={index}
                      listValue={item.value}
                      handleEditButtonClick={() => {
                        handleEditButtonClick(index);
                      }}
                      handleDeleteList={() => {
                        handleDeleteList(index);
                      }}
                    />
                  );
              }
            })}

            {addingState && (
              <InputList
                onChange={() => handleAddInput()}
                onClickSaveButton={() => handleSaveButtonClick()}
                onClickCancelButton={() => {
                  handleCancelButtonClick();
                }}
              />
            )}
          </ul>
          {!addingState && (
            <div className="add-list-container">
              <button className="add-list-button" onClick={handleAddListClick}>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="-2 -2 24.00 24.00"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#999999"
                    strokeWidth="0"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#ffffff"
                      fillRule="evenodd"
                      d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm14 .069a1 1 0 01-1 1h-2.931V14a1 1 0 11-2 0v-2.931H6a1 1 0 110-2h3.069V6a1 1 0 112 0v3.069H14a1 1 0 011 1z"
                    />{" "}
                  </g>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
