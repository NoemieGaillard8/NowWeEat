import React from "react";
import FilterButton from "./FilterButton";
import FilterList from "../assets/filterList.json";
import "../styles/components/filterslider.css";

const FilterSlider = () => {

  return (
    <div className="scroll-container">
      {FilterList.map((filter, index) => (
        <FilterButton key={index} text={filter.name} isAllergy={filter.category === "allergie"?true:false} />
      ))}
    </div>
  );
};
export default FilterSlider;