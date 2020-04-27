import React from 'react';
import './Home.css';
import {Title} from '../Title/Title'
import {
    Link
  } from "react-router-dom";


export class Home extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
        <section className="section-background">
            <Title title="What do you want to bake today?"/>
   
                <div className = "recipecontainers">
                    <div className="recipelist displayAnimation" style={{  animationDelay: .2 + 's' }}>
                        <Link style={{textDecoration:"none"}} to="/cupcakes">
                            <img src="./images/cupcake1.jpg"/>
                            <figcaption>Cupcakes</figcaption>
                        </Link>
                    </div>
                    <div  className="recipelist displayAnimation" style={{  animationDelay: .4 + 's' }}>
                        <Link style={{textDecoration: "none"}} to="./brownie">
                            <img src="./images/brownie.jpg"/>
                            <figcaption>Brownies</figcaption>
                        </Link>    
                    </div>
                    <div  className="recipelist displayAnimation" style={{  animationDelay: .6+ 's' }}>
                    <Link style={{textDecoration:"none"}} to="/cakes">
                        <img src="./images/cake1.jpg"/>
                        <figcaption>Cakes</figcaption>
                    </Link>
                    </div>
                    <div className="recipelist recipelist_cookie displayAnimation" style={{  animationDelay: .8 + 's' }}>
                            <img src="images/chocolatecookie.jpg"/>
                            <h3 className="img__description" >Coming soon!</h3>
                            <figcaption>Cookies</figcaption>                
                    </div>
                  
            </div>    
        

        </section>
        
    );

  } 

}
