import React from "react"
import coffeeList from "../../coffee-list"

const RecipeCard = props => {
  const selectedCoffee = coffeeList.find(coffee => coffee.name === props.drink)

  const displayCoffee = () => {
    if (selectedCoffee) {
      return (
        <>
          <div className="card-wrapper">
            <div className="card-image">
              <svg
                width="306"
                height="306"
                viewBox="0 0 306 306"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4.5"
                  y="4.5"
                  width="297"
                  height="297"
                  fill="#D9D9D9"
                  stroke="black"
                  strokeWidth="3"
                />
                <rect
                  x="1.5"
                  y="1.5"
                  width="303"
                  height="303"
                  fill="#D9D9D9"
                  stroke="black"
                  strokeWidth="3"
                />
                <rect x="3" y="3" width="300" height="300" fill="#F7F7F7" className="foam" />
                <rect x="3" y="79" width="300" height="224" fill="#8E8E8E" className="milk" />
                <rect x="3" y="176" width="300" height="127" fill="#626262" className="espresso" />
              </svg>
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
            <div className="scroll-buttons">
              <button id="left" onClick={props.previousCard}>
                Left
              </button>
              <button id="right" onClick={props.nextCard}>
                Right
              </button>
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
