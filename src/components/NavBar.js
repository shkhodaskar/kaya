import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {

  state = {
    currentPage: 0 //0 : Home 1 : Login
  }

  render() {
    return (
      <nav className="nav nav-pills nav-fill bg-light">

        <Link className={`nav-item nav-link ${this.state.currentPage === 0 ? 'active' : ''}`} 
              to = '/' 
              onClick={()=>{
                this.setState({currentPage: 0})
        }}>
            Home
        </Link>
        <Link className={`nav-item nav-link ${this.state.currentPage === 1 ? 'active' : ''}`} 
              to = '/login'
              onClick={()=>{
                this.setState({currentPage: 1})
        }}>
            Login
        </Link>
    </nav>
    )
  }
}

export default withRouter(Navbar)