import React from 'react';
import './Nav.css';
import {Logo} from '../Logosvg/Logo'
import {
    Link, NavLink
  } from "react-router-dom";

  const styleactive = {
    color: '#ec407a'
  }


export class Nav extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
        <div className='displayNav'>
        <nav>
            <Logo />

            <div className="nav">
                <ul className = "nav-ul">
                    <li className="nav-home"><NavLink to="/" exact activeStyle={styleactive}>HOME</NavLink></li>
                    <li className="nav-cupcakes"><NavLink to="/cupcakes" exact activeStyle={styleactive}>CUPCAKES</NavLink></li> 
                    <li className = "nav-brownie" ><NavLink to="/brownie" exact activeStyle={styleactive}>BROWNIES</NavLink></li> 
                    <li className="nav-cake"><NavLink to="/cakes" exact activeStyle={styleactive}>CAKES</NavLink></li>
                </ul>
            </div>
        </nav>
        </div>
    );

  } 

}

