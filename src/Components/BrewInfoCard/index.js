import React from "react"
import brewingMethods from "../../brewing-methods"

const BrewInfoCard = () => {
  console.log(brewingMethods)
  return (
    <article>
      <div className="card-wrapper">
        {brewingMethods.map((brew, index) => {
          return (
            <div className="card-info" key={index}>
              <h1>{brew.name}</h1>
              <p>{brew.description}</p>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default BrewInfoCard
