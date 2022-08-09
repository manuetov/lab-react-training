import React from 'react'

function Greetings({lang, children}) {
   console.log(lang);

   const translate = (lang) => {
      
      switch (lang) {
         case 'de':
            return `hallo ${children}`
         case 'fr': 
            return `Bonjour ${children}`
         default: 
            return 'lenguaje no encontrado'
      }
   }

  return (
   <div>
      <h2>{translate(lang)}</h2>
   </div>
  )
}

export default Greetings