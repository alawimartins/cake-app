import React from 'react';
import './App.css';
import {Nav} from '../Nav/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home} from '../Home/Home'
import {Cupcake} from '../Cupcake/Cupcake'
import {Recipe} from '../Recipe/Recipe'
import {Brownies} from '../Brownies/Brownies'
import {Cakes} from '../Cakes/Cakes'
import { Navsmall } from '../Navsmall/Navsmall';

class App extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <Router>
      <div className="App">
       
       <Nav />
       <Navsmall />

      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/recipes/:recipeid">
            <Recipe />
          </Route>
          <Route path="/cupcakes">
            <Cupcake />
          </Route>
          <Route path="/brownie">
            <Brownies />
          </Route>
          <Route path="/cakes">
            <Cakes />
          </Route>
      </Switch>

      </div>
      </Router>
      
    );

  } 

}

export default App;
