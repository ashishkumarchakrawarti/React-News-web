import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Travel from './Travel'
import Photos from './components/Photos';
import './Photo.css'


export default class App extends Component {
 
  render() {
    return (
    <div>
       <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business"/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>}/>
         
          <Route exact path="/travel" element={<Travel/>}/>
          <Route exact path="/photos" element={<Photos/>}/>
        
          {/* <Route exact path="/https://ashishkumarchakrawarti.github.io/TechInfo/" /> */}
         
        </Routes>
        </Router>
    </div>
    )
  }
}
