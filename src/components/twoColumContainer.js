import React from "react"

import "../styles/twoColumContainer.css"

const TwoColumnContent = ({ leftComponent, rightComponent }) => {
  return (
    <div className="two-column-container">
      <div className="left">{leftComponent}</div>
      <div className="right">{rightComponent}</div>
    </div>
  )
}

export default TwoColumnContent
