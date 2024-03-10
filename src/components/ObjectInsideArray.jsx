import { useState } from "react";

export default function ObjectInsideArray() {
  const [cars, setCars] = useState([
    {
      manufacturer: "Ford",
      model: "Ford Ranger Wildtrak",
      year: 2024,
      price: 1604000,
      colors: [
        "Snowflake White Pearl",
        "Meteor Grey",
        "Aluminum Metallic",
        "Luxe Yellow",
        "Sedona Orange",
        "Absolute Black",
      ],
      imageLink:
        "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-variant-photo/mobile/gallery/ford-ranger-wildtrak-4x2-primary-64f53fca9a5c4.jpg",
    },
    {
      manufacturer: "Honda",
      model: "RS Turbo CVT Honda SENSING",
      year: 2022,
      price: 1775000,
      colors: [
        "Ignite Red Metallic",
        "Platinum White Pearl",
        "Meteoroid Gray Metallic",
      ],
      imageLink:
        "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/gallery/2022-honda-civic-rs-cvt-philippines-619c70098289b.jpg",
    },
  ]);

  const [editMode, setEditMode] = useState({ state: false, index: -1 });
  const [addingColor, setAddingColor] = useState({ state: false, index: -1 });
  /* TEMPORARY VALUES */
  const [editingCar, setEditingCar] = useState({
    manufacturer: "",
    model: "",
    year: -1,
    price: -1,
    colors: [],
    imageLink: "",
  });
  const [colorInput, setColorInput] = useState("");

  /* HANDLE THE CHANGES IF THE EDIT BUTTON WAS CLICKED */
  function handleEditButton(cardIndex) {
    setEditMode((e) => ({ ...e, state: true, index: cardIndex }));
    setEditingCar((e) => ({ ...cars[cardIndex] }));
  }

  /* INPUT CHANGES */
  function handleManufacturerChange(carIndex) {
    setEditingCar((e) => ({ ...e, manufacturer: event.target.value }));
    if (event.key === "Enter") handleSaveEdit(carIndex);
  }
  function handleModelChange(carIndex) {
    setEditingCar((e) => ({ ...e, model: event.target.value }));
    if (event.key === "Enter") handleSaveEdit(carIndex);
  }
  function handleYearChange(carIndex) {
    setEditingCar((e) => ({ ...e, year: event.target.value }));
    if (event.key === "Enter") handleSaveEdit(carIndex);
  }
  function handlePriceChange(carIndex) {
    setEditingCar((e) => ({ ...e, price: event.target.value }));
    if (event.key === "Enter") handleSaveEdit(carIndex);
  }
  function handleImageLinkChange(carIndex) {
    setEditingCar((e) => ({ ...e, imageLink: event.target.value }));
    if (event.key === "Enter") handleSaveEdit(carIndex);
  }

  /* COLOR CHANGES */
  function handleColorChange(carIndex, colorIndex) {
    setEditingCar((e) => {
      const updatedEditingCar = { ...e };
      let newColors = [...updatedEditingCar.colors];
      newColors[colorIndex] = event.target.value;
      updatedEditingCar.colors = newColors;
      return updatedEditingCar;
    });
    if (event.key === "Enter") handleSaveEdit(carIndex);
  }
  function handleAddColorButton(carIndex) {
    setAddingColor((ac) => ({
      ...ac,
      state: true,
      index: carIndex,
    }));
  }
  function handleAddColorInput() {
    setColorInput((ci) => event.target.value);
  }
  function saveColorInput() {
    setEditingCar((e) => {
      const updatedEditingCar = { ...e };
      let newColors = [...updatedEditingCar.colors];
      newColors.push(colorInput);
      updatedEditingCar.colors = newColors;
      return updatedEditingCar;
    });
    setColorInput((ci) => "");
  }
  function cancelColorInput() {
    setAddingColor((ac) => ({ ...ac, state: false, index: -1 }));
  }
  function removeColor(colorIndex) {
    setEditingCar((e) => {
      const updatedEditingCar = { ...e };
      let newColors = [...updatedEditingCar.colors];
      newColors.splice(colorIndex, 1);
      updatedEditingCar.colors = newColors;
      return updatedEditingCar;
    });
  }

  /* SAVE, CANCEL AND DELETE*/
  function handleSaveEdit(carIndex) {
    setCars((c) => {
      const updatedCars = [...c];
      updatedCars[carIndex] = {...editingCar};
      return updatedCars;
    });
    turnOffEditMode();
  }

  function turnOffEditMode() {
    setEditMode((e) => ({ ...e, state: false, index: -1 }));
    setAddingColor((ac) => ({ ...ac, state: false, index: -1 }));
  }

  function handleDeleteCar(carIndex) {
    setCars((c) => {
      let updatedCars = [...c];

      updatedCars.splice(carIndex, 1);

      return updatedCars;
    });
  }

  let cardContent = (
    <>
      {cars.map((car, carIndex) => {
        if (!editMode.state || editMode.index !== carIndex) {
          return (
            <div className="card-container" key={car.model}>
              <h1>Car Number {carIndex + 1}</h1>
              <button
                className="edit-button"
                onClick={() => handleEditButton(carIndex)}
              >
                Edit
              </button>
              <br />
              <img src={car.imageLink} alt="" />
              <p>Manufacturer: {car.manufacturer}</p>
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
              <p>Price: P{car.price}</p>
              {car.colors.length > 0 ? (
                <div>
                  <p>Colors:</p>
                  <ul className="color-list">
                    {car.colors.map((color, colorIndex) => (
                      <li key={colorIndex}>{color}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No available colors.</p>
              )}
            </div>
          );
        } else if (editMode.state && editMode.index === carIndex) {
          /* EDIT MODE */
          return (
            <div className="card-container" key={car.model}>
              <h1>Car Number {carIndex + 1}</h1>
              <p>Edit Mode</p>
              <div className="input-container">
                <input
                  type="text"
                  value={editingCar.manufacturer}
                  placeholder="Manufacturer"
                  onChange={handleManufacturerChange}
                  onKeyDown={() => handleManufacturerChange(carIndex)}
                />
                <input
                  type="text"
                  value={editingCar.model}
                  placeholder="Model"
                  onChange={handleModelChange}
                  onKeyDown={() => handleModelChange(carIndex)}
                />
                <input
                  type="number"
                  value={editingCar.year}
                  placeholder="Year"
                  onChange={handleYearChange}
                  onKeyDown={() => handleYearChange(carIndex)}
                />
                <input
                  type="number"
                  value={editingCar.price}
                  placeholder="Price"
                  onChange={handlePriceChange}
                  onKeyDown={() => handlePriceChange(carIndex)}
                />
                <input
                  type="text"
                  placeholder="Image Link"
                  value={editingCar.imageLink}
                  onChange={handleImageLinkChange}
                  onKeyDown={() => handleImageLinkChange(carIndex)}
                />
              </div>
              <p>Colors:</p>
              <ul className="color-list">
                {editingCar.colors.map((color, colorIndex) => (
                  <div key={colorIndex} className="color-container">
                    <li>
                      <input
                        className="color-input"
                        onChange={() => handleColorChange(carIndex, colorIndex)}
                        onKeyDown={() => handleColorChange(carIndex)}
                        type="text"
                        value={color}
                      />
                    </li>
                    <button
                      className="color-button remove-color"
                      onClick={() => {
                        removeColor(colorIndex);
                      }}
                    >
                      x
                    </button>
                  </div>
                ))}

                {addingColor.state && addingColor.index === carIndex ? (
                  <div className="add-color-input-container">
                    <li>
                      <input
                        type="text"
                        name="add-color-input"
                        className="color-input"
                        placeholder="Add colors..."
                        onChange={handleAddColorInput}
                        value={colorInput}
                      />
                    </li>
                    <button
                      className="save-color-button color-button"
                      onClick={saveColorInput}
                    >
                      ✓
                    </button>
                    <button
                      className="cancel-add-color-button color-button"
                      onClick={cancelColorInput}
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <button
                    className="add-color-option"
                    onClick={() => {
                      handleAddColorButton(carIndex);
                    }}
                  >
                    Add more colors
                  </button>
                )}
              </ul>
              <div className="edit-buttons-container">
                <button
                  className="edit-buttons save-edit"
                  onClick={() => handleSaveEdit(carIndex)}
                >
                  Save
                </button>
                <button
                  className="edit-buttons cancel-edit"
                  onClick={turnOffEditMode}
                >
                  Cancel
                </button>
                <button
                  className="edit-buttons delete-car"
                  onClick={() => handleDeleteCar(carIndex)}
                >
                  Delete Car
                </button>
              </div>
            </div>
          );
        }
      })}
      <div className="add-cars-container">
        <p>Add more cars...</p>
        <svg
          width="150px"
          height="150px"
          viewBox="-2 -2 24.00 24.00"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#000000"
          strokeWidth="0.0002"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#999999"
            strokeWidth="0.12"
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
      </div>
    </>
  );

  return (
    <>
      <div id="container">{cardContent}</div>
    </>
  );
}

/* TO DO LIST 

Color Edit

*/
