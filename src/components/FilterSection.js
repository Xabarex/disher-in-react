import React from "react"

function FilterSection() {
  return (
    <div className="filter-section">
      <input type="checkbox" checked={false}></input>
      <label>only vegan</label>
    </div>
  )
}

export default FilterSection