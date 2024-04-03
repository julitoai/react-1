import { useState } from "react";
import "./ColorPicker.css";

function ColorPicker () {
    
    const [color, setColor] = useState('#black');

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return (
        <div className="color-display-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor:  color}} >
        <p style={{backgroundColor:  color}}>Selected color: {color}</p>  
        </div>
        <label>Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange}/>

        </div> 

    );
}

export default ColorPicker;