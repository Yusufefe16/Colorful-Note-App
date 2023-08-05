import {  useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./formSlice";
import { nanoid } from 'nanoid';

function Input() {
  const dispatch = useDispatch();
  const idnano = nanoid();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value); 
  };
  const search = useSelector((state) => state.form.search);
  
  const [backgroundColor, setBackgroundColor] = useState("pink");
  const items = useSelector((state) => state.form.items);
  const handleAddItem = () => {
    if(text==="") return;
    const newItem = {
      id: idnano, 
      context: text,
      color: backgroundColor,
    };
    dispatch(addItem(newItem));
    setText("");
  };
  

  const handleColorClick = (color) => {
    setBackgroundColor(color);
  };
  const handleItemClick = (item) => {
    setText(item.context);
    setBackgroundColor(item.color);
  };
  const filteredItems = items.filter((item) => item.context.includes(search));
  return (
    <div id="noteInput">
      <div>
        <textarea
          style={{ backgroundColor: backgroundColor }}
          type="text"
          value={text}
          onChange={handleChange}
          id="mainInput"
          rows="4"
          cols="50"
          placeholder="Enter your note here..."
        />
        <div className="colors">
          <div
            onClick={() => handleColorClick("pink")}
            className="color color-pink"
          ></div>
          <div
            onClick={() => handleColorClick("#edb1f1")}
            className="color color-purple"
          ></div>
          <div
            onClick={() => handleColorClick("#fdffcd")}
            className="color color-yellow"
          ></div>
          <div
            onClick={() => handleColorClick("#9fd3c7")}
            className="color color-blue"
          ></div>
          <div
            onClick={() => handleColorClick(" #e0ffcd")}
            className="color color-green"
          ></div>
        </div>

        <button onClick={handleAddItem} id="addButton">add</button>
      </div>
      <div className="notes" style={{ marginTop: "80px" }}>
        <ul className="ul">{filteredItems.map((item) => (
          <li style={{backgroundColor: item.color}} key={item.id} id={item.id} className="items" onClick={() => handleItemClick(item)}> {item.context} </li>
        ))}</ul>
      </div>
    </div>
  );
}

export default Input;
