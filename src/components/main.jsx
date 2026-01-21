import React from "react";

export default function Main() {

  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newIngredient = formData.get('ingredient');
    if(newIngredient){
      setIngredients(
        prevIngredients => [...prevIngredients, newIngredient]
      )
    }
    event.target.reset();
  }

  return (
    <main>

      <form onSubmit={addIngredient}>
        <input type="text" placeholder="eg: egg" name="ingredient"/>
        <button className="addButton">Add Ingredient</button>
      </form>

      {ingredients.length > 0 && 
        <section className="ingSection">
          <h2>Ingredients on hand:</h2>
          <ul className="ingList">
            {ingredientsList}
          </ul>

          {ingredients.length > 4 &&
            <section className="genSection">
              <div className="recipe">
                <h3>Ready for your recipe ?</h3>
                <p>Generate the best recipe based on your ingredients.</p>
              </div>
              <button className="genButton">Generate Recipe</button>
            </section>
          }

        </section>
      }

    </main>
  )
}