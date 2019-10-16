import React, { Component } from 'react'
import Login from './pages/Login'
import Description from './pages/Description'
import Home from './pages/Home'
import Store from './pages/Store'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'
import './App.css'

export default class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      userId : "",
      screen : "",
      type : "",
      end : false
    }

    this.handler = this.handler.bind(this)
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
              ver : this.state.ver === 'A' ? 'B' : 'A',
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
        <Route path = "/ios_backgroud" component={Home}/>
        <Route path = "/app_store" component={Store}/>
      </div>
    )
  }
}
