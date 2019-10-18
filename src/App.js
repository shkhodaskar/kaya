import React, { Component } from 'react'
import Login from './pages/Login'
import Description from './pages/Description'
import Home from './pages/Home'
import Store from './pages/Store'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'
import Splash from './pages/Splah'
import './App.css'
import Disagree from './pages/Disagree'

//import InstructModal from './components/Modal'

import questionMark from './resources/question_mark.png'


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
      instrument:"",
      isInstalled: false
    }

    this.handler = this.handler.bind(this)
    this.handleInstall = this.handleInstall.bind(this)
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
              end : true,
              isInstalled: false
          })
        }
        else{
            this.setState({
                first_try : false
            })
        }
    }
  }

  handleInstall = () => {
    this.setState({
      isInstalled: true
    })
  }

  handleUnInstall = () => {
    this.setState({
      isInstalled: false
    })
  }

  handleInstruct = (value) => {
    this.setState({
      instrument: value
    })
  }

  render() {
    return (
      <div className='device_container'>
        <div className = "instruction">
          <button src={questionMark} >
            <img src={questionMark} alt = "instruct"/>
          </button>
        </div>
        
        
        <Route exact path = "/" component = {Description}/>
        <Route path = "/login" component = {Login}/>
        <Route  path = "/ios_backgroud" 
                component={()=><Home isInstalled={this.state.isInstalled} type = {this.state.type}/>}/>
        <Route  path = {`/app_store/:${this.state.type}`} 
                component={()=><Store handleInstall={this.handleInstall} 
                                      type = {this.state.type} 
                                      isInstalled = {this.state.isInstalled} 
                                />}/>
        <Route path = "/splash" component={Splash}/>
        <Route path = "/disagree" component={Disagree}/>
      </div>
    )
  }
}
