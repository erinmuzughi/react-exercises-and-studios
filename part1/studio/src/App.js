import logo from './logo.svg';
import './App.css';
import RecipeDescription from '../src/components/Description.js';
import RecipeIngredients from '../src/components/Ingredients.js';
import RecipePhoto from '../src/components/Photo.js';


function App() {
  return (
    <div className="App">
   <div className="recipePhotoBlock">
      <RecipePhoto />
      <div className="recipePhotoBlock">
         <RecipeDescription />
         <RecipeIngredients />
      </div>
   </div>
 </div>
  );
}

export default App;
