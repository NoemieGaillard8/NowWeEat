import React from 'react';
import BottomBar from './components/BottomBar';
import './styles/layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="main-content">{children}</div>
      <BottomBar />
    </div>
  );
};

export default Layout;
