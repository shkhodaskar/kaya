import React, { Component } from 'react'
import Login from './pages/Login'
import Description from './pages/Description'
import Home from './pages/Home'
import Store from './pages/Store'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'
import './App.css'

function getRandomType(){
  return Math.floor(Math.random() * 2) === 1 ? 'A' : 'B';
}

export default class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      userId : "",
      screen : "",
      type : getRandomType(),
      end : false,
      instrument:""
    }

    this.handler = this.handler.bind(this)

    console.log(this.state.type)
  }

  handler(someValue) {
    this.setState({
      screen: someValue
    })
    if (someValue === 'Description.') {
        if(this.state.end) this.setState({
            title: 'End.'
        })
        if(!this.state.first_try){
          this.setState({
              type : this.state.type === 'A' ? 'B' : 'A',
              end : true
          })
        }
        else{
            this.setState({
                first_try : false
            })
        }
    }
  }

  render() {
    return (
      <div className='device_container'>
        <Route exact path = "/" component = {Description}/>
        <Route path = "/login" component = {Login}/>
        <Route  path = "/ios_backgroud" 
                component={()=><Home type = {this.state.type}/>}/>
        <Route  path = {`/app_store/:${this.state.type}`} 
                component={()=><Store type = {this.state.type}></Store>}/>
      </div>
    )
  }
}
