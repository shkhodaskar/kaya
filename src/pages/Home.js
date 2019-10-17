import React, {Component} from 'react'
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
import Clock from '../resources/Clock.png'
import Settings from '../resources/Settings.png'
import IconButton from '../components/IconButton'
import {Link} from 'react-router-dom'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      open : true,
      isInstalled : false,
      instructionText : "1. Please access app store",
      type : props.type
    }
    console.log(this.state.type)
  }

  handleOpen = () => {
      this.setState({
          open : true
      })
  };

  handleClose = () => {
      this.setState({
          open : false
      })
  }

  handleInstall = () => {
    this.setState({
      isInstalled : true
    })
  }

  render(){
    return (
      <section className="background_ios">
      {/* App Store Button : 1st Step */}
      {/* <button onClick={()=>{this.props.handler('Install application.')}}><IconButton img={AppStore} name="App Store"></IconButton></button> */}
      <Link to={`/app_store/:${this.state.type}`}
            className="icon"
            state={this.props.type}
      >
      <IconButton img={AppStore} name="App Store"></IconButton>
      </Link>
      {/* Sample Icon1 */}
      <IconButton img={Calendar} name="Calendar"></IconButton>
      {/* Sample Icon2 */}
      <IconButton img={Clock} name="Clock"></IconButton>
      {/* Sample Icon3 */}
      <IconButton img={Settings} name="Settings"></IconButton>
      {this.state.isInstalled ? <IconButton /> : ''}
      </section>
    );
  }
}

export default Home