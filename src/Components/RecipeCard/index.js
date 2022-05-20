import React from "react"
import coffeeList from "../../coffee-list"

const RecipeCard = props => {
  const selectedCoffee = coffeeList.find(coffee => coffee.name === props.drink)

  const displayCoffee = () => {
    if (selectedCoffee) {
      return (
        <>
          <div className="card-image">This is an image</div>
          <div className="card-info">
            <h1>{selectedCoffee.name}</h1>
            <p>{selectedCoffee.description}</p>
            <div className="ratio">
              <p>Ratio:</p>
              <p>{selectedCoffee.ratio}</p>
            </div>
            <div className="cup">
              <p>Recommended cup:</p>
              <p>{selectedCoffee.cupType}</p>
            </div>
          </div>
        </>
      )
    }
  }

  return (
    <article>
      <div className="card-wrapper">{displayCoffee()}</div>
    </article>
  )
}

export default RecipeCard
