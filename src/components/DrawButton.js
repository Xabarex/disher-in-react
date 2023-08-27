import React from "react"

function DrawButton({onDrawClick}) {
  return (
    <button type="button" onClick={onDrawClick} className="btn">
      Wylosuj
    </button>
  )
}

export default DrawButton