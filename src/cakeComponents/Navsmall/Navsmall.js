import React from 'react';
 import './Navsmall.css';
import {Logo} from '../Logosvg/Logo'
import {
    Link, NavLink
  } from "react-router-dom";

  const styleactive = {
    color: '#ec407a'
  }

  


export class Navsmall extends React.Component {
  constructor(props){
    super(props)
    this.state = {isClicked: false}
  }

  myFunction() {
      
    this.setState({isClicked : !this.state.isClicked});
  }

  render() {
    const isOn = this.state.isClicked
    return (
        <div className="displaySmallNav">
            <div className='navSmallNav'>
                
                <div className={ isOn? "container-bar change" : "container-bar"} onClick={this.myFunction.bind(this)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                
                <Logo />
                <div className="main-container-bar">
                </div>
            </div>
            <div className="small-nav">
                <ul className = {isOn ? "small-nav-ul" : "displayNone-ul"} >
                    
                    <li className="nav-home"><NavLink to="/" exact activeStyle={styleactive}>Home</NavLink></li>
                    <li className="nav-cupcakes"><NavLink to="/cupcakes" exact activeStyle={styleactive}>Cupcakes</NavLink></li> 
                    <li className = "nav-brownie" ><NavLink to="/brownie" exact activeStyle={styleactive}>Brownies</NavLink></li> 
                    <li className="nav-cake"><NavLink to="/cakes" exact activeStyle={styleactive}>Cakes</NavLink></li>
                </ul>
                {/* <div className="container-bar" onClick={myFunction(this)}> */}
            </div>
        </div>
    );

  } 

}