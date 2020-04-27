import React from 'react';
import './Cupcake.css';
import {Title} from '../Title/Title'
import {Option} from '../Option/Option'

import {
    Link
  } from "react-router-dom";


export class Cupcake extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (

      <div>
        <Title title="Cupcakes and ingredients"/>
        <section className="majorcontainer">
        <Option delay={0.1} imgSrc="images/cupcake-vanilla.png" name="Vanilla" buttonTitle="See Recipe" url = "/recipes/cupcakevanilla"/>
        <Option delay={0.2} imgSrc="images/cupcake-chocolate.png" name="Chocolate" buttonTitle="See Recipe" url = "/recipes/cupcakechocolate"/>
        <Option delay={0.4} imgSrc="images/cupcake-redvelvet.png" name="Red Velvet" buttonTitle="See Recipe" url = "/recipes/cupcakeredvelvet"/>
        <Option delay={0.55} imgSrc="images/cupcake-oreo.png" name="Oreo" buttonTitle="Coming Soon!"/>
        <Option delay={0.7} imgSrc="images/cupcake-strawberry.png" name="Strawberry" buttonTitle="Coming Soon!"/>
        </section>
      </div>
        
    );

  } 

}
