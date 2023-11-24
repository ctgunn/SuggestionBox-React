import React from 'react';
import '../css/App.css';
import {Routes} from "react-router-dom";
import {appRoutes} from "../AppRoutes";
// import Login from './Login';

const App = () => {
  return (
      <Routes>{appRoutes}</Routes>
    );
};

export default App;
