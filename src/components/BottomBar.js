import React from 'react';
import { FaBagShopping,FaBook,FaCalendar,FaFire } from 'react-icons/fa6';
import '../styles/components/bottombar.css';
import { ReactComponent as AddIcon } from '../assets/addIcon.svg'; 

const BottomBar = () => {
    return (
      <div className="bottom-bar">
        <div className="icon"> <FaBook></FaBook> </div>
        <div className="icon"> <FaBagShopping/> </div>
        <div className="icon">  <AddIcon width="30" height="30" /> </div>
        <div className="icon"> <FaCalendar/> </div>
        <div className="icon"> <FaFire/></div>
      </div>
    );
  };

export default BottomBar;
