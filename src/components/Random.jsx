import React from 'react'

function Random({min, max}) {
//   console.log(min, max);
  function obtenerNumeroAleatorio(min, max) {
	return parseInt(Math.random() * ((max + 1) - min) + min);
}

   return (
    <div>
      <h4>Random value between {min} and {max} = {obtenerNumeroAleatorio(min, max)}</h4>
    </div>
  )
}

export default Random