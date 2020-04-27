import React from 'react';
// import './Cakes.css';
import {Title} from '../Title/Title'
import {Option} from '../Option/Option'
import {
    Link
  } from "react-router-dom";


export class Cakes extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div>
        <Title title="Cakes and ingredients"/>
        <section className="majorcontainer">
        <Option delay={0} imgSrc="images/cake-carrot.png" name="Carrot" buttonTitle="See Recipe" url = "/recipes/cakecarrot"/>
        <Option delay={.2} imgSrc="images/cake-chocolate.png" name="Chocolate" buttonTitle="See Recipe" url = "/recipes/cakechocolate"/>
        <Option delay={.4} imgSrc="images/cake-redvelvet.png" name="Red Velvet" buttonTitle="See Recipe" url = "/recipes/cakeredvelvet"/>
        <Option delay={.8} imgSrc="images/cake-lemon.png" name="Lemon" buttonTitle="Coming Soon!"/>
        <Option delay={.6} imgSrc="images/cake-strawberry.png" name="Strawberry" buttonTitle="Coming Soon!"/>
        </section>
      </div>
        
    );

  } 

}
