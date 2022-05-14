import React, { useState } from "react"
import coffeeList from "../../coffee-list"
import Card from "../Card"

// needs state for the select element
// when a drink is selected, display the corresponding recipe card

const Options = () => {
  const [coffee, setCoffee] = useState("Espresso")

  const coffeeSelected = e => {
    const coffee = e.target.value
    setCoffee(coffee)
  }

  return (
    <>
      <div className="intro">
        <p>
          Scroll through a selection of 12 coffee drink recipes or select a coffee drink from the
          menu below.
        </p>
        <div className="options">
          <label>Select a coffee:</label>
          <select name="coffee-drinks" id="coffee-selector" onChange={coffeeSelected}>
            {/* <option>Select a drink</option> */}
            {coffeeList.map((coffee, index) => (
              <option value={coffee.name} key={index}>
                {coffee.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Card drink={coffee} />
    </>
  )
}

export default Options
