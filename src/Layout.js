import React from 'react';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import './styles/layout.css'

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <TopBar />
      <div className="main-content">{children}</div>
      <BottomBar />
    </div>
  );
};

export default Layout;
