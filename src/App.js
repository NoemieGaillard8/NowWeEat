import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Layout from './Layout';
import AddRecipe from './pages/AddRecipe'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        {/* <Route path="/shopping" element={<Layout><ShoppingList /></Layout>} /> */}
        <Route path="/addrecipe" element={<AddRecipe />} />
        {/* Ajouter d'autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
