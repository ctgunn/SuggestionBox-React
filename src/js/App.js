import React from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import SuggestionBox from './components/SuggestionBox';
import {render} from "react-dom";
// import Login from './Login';

export default function App() {
  render (
        <SuggestionBox />
    );
}
