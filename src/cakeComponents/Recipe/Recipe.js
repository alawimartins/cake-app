import React from 'react';
import './Recipe.css';
import {Title} from '../Title/Title'
import {Option} from '../Option/Option'
import recipesData from '../../recipesData'
import {
    withRouter,
    Link,
    useParams
  } from "react-router-dom";

  


export const Recipe = withRouter(class Recipe extends React.Component {
  constructor(props){
    super(props)

  }

  onGoBack () {
    this.props.history.goBack();
  }

  render() {
    console.log(this.props)
    const idFromUrl = this.props.match.params.recipeid; // bananacake

    const recipe = recipesData[idFromUrl]; // {} || undefined

    

    console.log(recipe)

    return (
      <div>
        <div onClick={this.onGoBack.bind(this)} className= 'previous-btn'>
          Back
        </div>

        { recipe ? 
        <>
          <Title title={recipe.title} /> 

          <div className="recipe-container-flex">
        <div className="recipe-container">
          <div className='ingredient-image-container' >
            <div className='ingredient-text'>
              <h1 className= 'title-recipe'>Ingredients</h1>
              <ul>{recipe.ingredients.map((ingredient) =><li>{ingredient}</li>)}</ul>
              {recipe.topping && <>
              <p class='topping-title'>{recipe.topping.title}</p>
              <ul>
              {recipe.topping.ingredients.map((ingredient) =><li>{ingredient}</li>)}
              </ul>
              </>}
            </div>
             <div className='image-ingredient' style= {{backgroundImage:`url(${recipe.img})`}}></div>
          </div>
          
          
          <div>
          <h1 className= 'title-recipe'>Method</h1>
            {recipe.method.map((step, i) =><div><h4>Step {i+1}</h4> <p>{step}</p></div>)}
          </div>

        </div>
        </div>

        </>
          
          
          : `Recipe ${idFromUrl} was not found`} 
        
        
        
      </div>
        
    );

  } 

})
