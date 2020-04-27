import React from 'react';
import './Title.css';
import {
    Link
  } from "react-router-dom";


export class Title extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (       
        <main>
            <div className="chooserecipe">
                <div className="chooserecipecontainer">
                    <div className="recipeflex">
                        <h2>{this.props.title}</h2>
                    </div>       
                </div>
            </div>
        </main>    
        
    );

  } 

}
