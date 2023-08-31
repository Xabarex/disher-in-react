import React from "react"

function FilterCheckbox({filterVege, handleFilterChange}) {
  return (
    <>
      <input type="checkbox" checked={filterVege} onChange={handleFilterChange}></input>
      <label>only vege</label>
    </>
  )
}

export default FilterCheckbox