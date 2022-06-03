import React, { useState } from "react"
import coffeeList from "../../coffee-list"
import RecipeCard from "../RecipeCard"

const Options = () => {
  const [coffee, setCoffee] = useState(coffeeList[0].name)
  const [nextCoffee, setNextCoffee] = useState(coffeeList[1].name)
  const [prevCoffee, setPrevCoffee] = useState(coffeeList[coffeeList.length - 1].name)

  const updateNextPrevCoffee = currentCoffee => {
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

  const updateCoffeeSelection = e => {
    const selectedCoffee = e.target.value
    console.log(selectedCoffee)
    setCoffee(selectedCoffee)
    updateNextPrevCoffee(selectedCoffee)
  }

  const nextCard = () => {
    console.log(nextCoffee)
    setCoffee(nextCoffee)
    updateNextPrevCoffee(nextCoffee)
  }

  const previousCard = () => {
    console.log(prevCoffee)
    setCoffee(prevCoffee)
    updateNextPrevCoffee(prevCoffee)
  }

  return (
    <>
      <div className="intro">
        <p>
          Scroll through a selection of {coffeeList.length} coffee drink recipes or select a coffee
          drink from the menu below.
        </p>
      </div>
      <article className="recipe-card">
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

        <RecipeCard drink={coffee} previousCard={previousCard} nextCard={nextCard} />
      </article>
    </>
  )
}

export default Options
