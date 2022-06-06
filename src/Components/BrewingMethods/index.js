import React from "react"
import BrewInfoCard from "../BrewInfoCard"

const BrewingMethods = () => {
  return (
    <div className="brewing-methods">
      <div className="intro">
        <p>
          There are many ways to brew coffee, each one creating a unique flavor and level of
          strength. Check out a few brewing styles below.
        </p>
      </div>
      <BrewInfoCard />
    </div>
  )
}

export default BrewingMethods
