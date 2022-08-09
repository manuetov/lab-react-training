import React from 'react'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
   type === 'Visa' ? type = 'Visa' : type = 'MasterCard'
   return (
      <div style={{backgroundColor: `${bgColor}`, color}}>
      <img src="{type}" alt="" />
      <p className='cardNumber'>{number.slice(4)}****</p>
      <div>
          <div>
              <p>Expires {expirationMonth}/{expirationYear}</p>
              <p>{bank}</p>
          </div>
      </div>
      <p>{owner}</p>
  </div>
  )
}

export default CreditCard