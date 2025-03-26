import React, { useState } from "react";
import { FaBan } from "react-icons/fa6";
import "../styles/components/filterbutton.css";

const FilterButton = ({text,isAllergy}) => {
    const [state,setState] = useState("null");
    console.log(text,isAllergy);

    const handleClick = () => {
        setState((prevState) => {
            if (prevState === "null") return "selected";
            if (prevState === "selected" && !isAllergy) return "ban";
            return "null";
        });
    };

    //choix du state 
    let buttonClass = "";
    if (state === "selected") {
        buttonClass = "selected";
    } else if (state === "ban" && !isAllergy) {
        buttonClass = "ban";
    } else {
        buttonClass = "null";
    }

    return (
        <div onClick={handleClick} className={`button-container ${buttonClass}`}>
            {state === "ban" && !isAllergy &&<FaBan className="icon-ban"/>}
            <div className="text">{text}</div>
        </div>
    );
};
export default FilterButton;