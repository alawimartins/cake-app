import React from 'react';
// import './Brownies.css';
import {Title} from '../Title/Title'
import {Option} from '../Option/Option'

import {
    Link
  } from "react-router-dom";


export class Brownies extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (

      <div>
        <Title title="Cupcakes and ingredients"/>
        <section className="majorcontainer">
        <Option delay={0.1} imgSrc="images/brownie-traditional.png" name="Traditional" buttonTitle="See Recipe" url = "/recipes/brownietraditional"/>
        <Option delay={0.3} imgSrc="images/brownie-caramel.png" name="Caramel" buttonTitle="See Recipe" url = "/recipes/browniecaramel"/>
        <Option delay={0.55} imgSrc="images/brownie-redvelvet.png" name="Red Velvet" buttonTitle="See Recipe" url = "/recipes/brownieredvelvet"/>
        <Option delay={0.7} imgSrc="images/brownie-oreo.png" name="Oreo" buttonTitle="Coming Soon!" />
        </section>
      </div>
        
    );

  } 

}
