import React from 'react';
import '../styles/components/searchbar.css';
import { MdOutlineSearch } from "react-icons/md";

const SearchBar = () => {

    return (
      <div className="search-bar-outlined"  >
      <MdOutlineSearch className="search-icon" />
      <input type="text" placeholder="recherche" />
    </div>
    );
  };

export default SearchBar;
