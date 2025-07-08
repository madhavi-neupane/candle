import React from 'react'
import CandleBody from './CandleBody'
import Flames from './Flames'

function candle() {
  return (
    <div className="candle">
        <Flames/>
        <CandleBody/>
    </div>
  )
}

export default candle
