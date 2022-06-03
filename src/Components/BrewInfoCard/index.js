import React from "react"
import brewingMethods from "../../brewing-methods"

const BrewInfoCard = () => {
  return (
    <article className="brewing-methods-wrapper">
      {brewingMethods.map((brew, index) => {
        return (
          <div className="brew-info" key={index}>
            <h1>{brew.name}</h1>
            <p>{brew.description}</p>
          </div>
        )
      })}
    </article>
  )
}

export default BrewInfoCard
