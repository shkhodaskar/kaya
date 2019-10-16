import React, { Component } from 'react'
import Login from './pages/Login'
import Description from './pages/Description'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='device_container'>
        <Route exact path = "/" component = {Description}/>
        <Route path = "/login" component = {Login}/>
        <Route path = "/ios_backgroud" component={Home}/>
        {/* <Route path = "/survey" component={}/> */}
      </div>
    )
  }
}
