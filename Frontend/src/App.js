import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/loginPage";
import Home from './pages/Home/home';
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
     <>
        
          <Home></Home>
          {/* <LoginPage></LoginPage> */}
            
     </>
  );
}

export default App;
