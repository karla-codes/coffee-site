import React from "react"
import coffeeList from "../../coffee-list"

const RecipeCard = props => {
  const selectedCoffee = coffeeList.find(coffee => coffee.name === props.drink)

  const updateCoffeeImage = () => {
    if (selectedCoffee) {
      return <div className="coffee-img" style={{ background: `${selectedCoffee.drinkColors}` }} />
    }
  }

  const displayCoffee = () => {
    if (selectedCoffee) {
      return (
        <>
          <div className="card-wrapper">
            {updateCoffeeImage()}
            <div className="scroll-buttons">
              <button id="left" aria-label="previous" onClick={props.previousCard}>
                &larr;
              </button>
              <button id="right" aria-label="next" onClick={props.nextCard}>
                &rarr;
              </button>
            </div>
            <div className="card-info">
              <h1>{selectedCoffee.name}</h1>
              <p>{selectedCoffee.description}</p>
              <div>
                <h2>Ratio:</h2>
                <p>{selectedCoffee.ratio}</p>
              </div>
              <div>
                <h2>Recommended cup:</h2>
                <p>{selectedCoffee.cupType}</p>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      console.log("Not working")
    }
  }

  return <>{displayCoffee()}</>
}

export default RecipeCard
