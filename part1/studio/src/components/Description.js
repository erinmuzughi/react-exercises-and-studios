import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
let authorLink = "https://sallysbakingaddiction.com/"
let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/profile-sally-300x300.jpg"
let authorName = "Sally McKenney"
return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "headshot of Sally McKenney from Sally's Baking Addiction" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Sally's Baking Addiction</a> 
       </div>
    </div>
 );
}

class RecipeDescription extends React.Component {
    render () {
        return (
        <div> 
        <div>
           <h1>Chewy Chocolate Chip Cookies</h1>
           <p>Super soft and chewy chocolate chip cookies are the most popular cookie recipe on my website.</p>
        </div>
        <RecipeAuthor />
     </div>
    );
    }
}

export default RecipeDescription;