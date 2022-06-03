import React from "react"
import BrewInfoCard from "../BrewInfoCard"

const BrewingMethods = () => {
  return (
    <div className="brewing-methods">
      <div className="intro">
        <p>
          Not all coffee is brewed in the same way. Different brewing styles can cause changes in
          the flavor and strength of the drink. Check out a few brewing styles below.
        </p>
      </div>
      <BrewInfoCard />
    </div>
  )
}

export default BrewingMethods
