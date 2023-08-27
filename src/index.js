import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const DATA = [
  {name: "spaghetti bolognese", vege: false},
  {name: "pierogi z mięsem", vege: false},
  {name: "pierogi ze szpinakiem", vege: true},
  {name: "pierogi z serem", vege: true},
  {name: "ryż z warzywami po azjatycku", vege: true},
  {name: "pizza", vege: false},
  {name: "pizza vege", vege: true},
  {name: "burrito", vege: false}
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App meals={DATA} />
  </React.StrictMode>
)