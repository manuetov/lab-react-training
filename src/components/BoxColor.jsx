import React from 'react'

function BoxColor({r, g, b}) {
   const backgroundColor ={
      background: `rgb(${r},${g},${b})`
  }
return (
  <div style={backgroundColor}>
      <h4> rgb( {r},{g},{b} ) </h4>
  </div>
)
}

export default BoxColor