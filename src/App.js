import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Products } from "./components/Products";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

      <Route  path="/" element={<Home/>}/>
      <Route  path="/products" element={<Products/>}/>
      </Routes>    
      
    </Router>
  );
}
