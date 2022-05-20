import React, { useState } from "react"
import coffeeList from "../../coffee-list"
import RecipeCard from "../RecipeCard"

// needs state for the select element
// when a drink is selected, display the corresponding recipe card

const Options = () => {
  const [coffee, setCoffee] = useState(coffeeList[0].name)
  const [nextCoffee, setNextCoffee] = useState(coffeeList[1].name)
  const [prevCoffee, setPrevCoffee] = useState(coffeeList[coffeeList.length - 1].name)

  const updateCoffeeSelection = e => {
    const selectedCoffee = e.target.value
    console.log(selectedCoffee)
    setCoffee(selectedCoffee)
    updateNextPrevCoffee(selectedCoffee)
  }

  const updateNextPrevCoffee = currentCoffee => {
    // check what coffee is selected
    // get index for selected coffee
    // begin scroll at that index
    // if 'right' btn selected, add 1 to index and setCoffee
    // if 'left' btn selected, subtract 1 from index and setCoffee
    // let next
    // let prev
    coffeeList.forEach((drink, index) => {
      if (drink.name === currentCoffee) {
        const next =
          index === coffeeList.length - 1 ? coffeeList[0].name : coffeeList[index + 1].name
        const prev =
          index === 0 ? coffeeList[coffeeList.length - 1].name : coffeeList[index - 1].name
        setNextCoffee(next)
        setPrevCoffee(prev)
      }
    })
  }

  const next = () => {
    console.log(nextCoffee)
    setCoffee(nextCoffee)
    updateNextPrevCoffee(nextCoffee)
  }

  return (
    <>
      <div className="intro">
        <p>
          Scroll through a selection of 18 coffee drink recipes or select a coffee drink from the
          menu below.
        </p>
        <div className="options">
          <label>Select a coffee:</label>
          <select name="coffee-drinks" id="coffee-selector" onChange={updateCoffeeSelection}>
            {coffeeList.map((coffee, index) => (
              <option value={coffee.name} key={index}>
                {coffee.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <RecipeCard drink={coffee} />
      <div className="scroll-buttons">
        <button id="left" onClick={updateNextPrevCoffee}>
          Left
        </button>
        <button id="right" onClick={next}>
          Right
        </button>
      </div>
    </>
  )
}

export default Options
