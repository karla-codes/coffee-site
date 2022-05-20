import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Drinks from "./Components/Drinks"
import BrewingMethods from "./Components/BrewingMethods"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Drinks />} />
          <Route path="/brewing-methods" element={<BrewingMethods />} />
        </Routes>
      </main>
    </>
  )
}

export default App
