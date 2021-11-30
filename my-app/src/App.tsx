import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <ProductPage />
    </div>
  );
}

export default App;
