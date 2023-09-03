
import './App.css';
import NewsItem from './Components/NewsItem';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Router>
           <Routes>
            <Route path="/" element={<News q="apple bitcoin tesla" pageSize={8}/>}></Route>
            <Route path="/bitcoin"element={<News q="bitcoin" pageSize={8}/>}></Route>
            <Route path="/apple"element={<News q="apple" pageSize={8}/>}></Route>
            <Route path="/tesla"element={<News q="tesla" pageSize={8}/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}





