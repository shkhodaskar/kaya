import React,{Component} from 'react';
import SplashImage from '../resources/logo.png';    //splash image(logo image)

//import {Link} from 'react-router-dom'

class Splash extends Component{

    componentDidMount(){
        setTimeout(() => {
            //this.props.handler('Kaya.')
            // <Link to = "/splash" />
            console.log('go!')
        }, 2000);   //splash time second * 1000
    }

    render(){
        return(
            <div className='background_splash'>
                <div className='splash_img'>
                    <img src={SplashImage} alt="splash img" width='100px' height='100px'></img>
                </div>
                
            </div>
        )
    }
}

export default Splash