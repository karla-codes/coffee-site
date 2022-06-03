import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import Drinks from "./Components/Drinks"
import BrewingMethods from "./Components/BrewingMethods"
import Footer from "./Components/Footer"
import "./css/style.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Drinks />} />
          <Route path="/brewing-methods" element={<BrewingMethods />} />
          <Route
            path="*"
            element={
              <main className="no-match">
                <h1>Nothing to see here...</h1>
                <p>Looks like this page does't exist.</p>
              </main>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
