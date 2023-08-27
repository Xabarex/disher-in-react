import React, { useState } from "react"
import DrawButton from "./components/DrawButton"
import FilterSection from "./components/FilterSection"
import { randomInt } from "./random-lib"


function App(props) {
  const meals = props.meals
  const [pickedMeal, drawMeal] = useState('Tutaj pojawi się wylosowane danie')

  function pickMeal(mealsArrayFromProps) {
    console.log(props)
    let indexOfPickedMeal = randomInt(0, mealsArrayFromProps.length)
    drawMeal(mealsArrayFromProps[indexOfPickedMeal].name)
  }

  return (
    <div className="main-space">
      <h1>Wylosuj sobie jedzonko</h1>
      <FilterSection />
      <DrawButton onDrawClick={() => pickMeal(meals)} />
      <p>{pickedMeal}</p>
    </div>    
  )
}

export default App