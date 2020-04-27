import React from 'react';
import './Option.css';
import {
    Link
  } from "react-router-dom";


export class Option extends React.Component {
  constructor(props){
    super(props)
    //props: Name - string
    //props: buttonTitle - string
    //props: imgSrc - string
    //props: url name - string

  }

  render() {
    return (
      <div >
          <div className="display-container displayAnimation" style={{  animationDelay: this.props.delay + 's' }}>
            <div>
                <div>
                   
                    <img src={this.props.imgSrc}/>
                    <figcaption>{this.props.name}</figcaption>
                </div>
                <Link to={this.props.url}><button className="button">{this.props.buttonTitle}</button> </Link>
            </div>    
          </div>
      </div>
        
    );

  } 

}
