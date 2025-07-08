import React from 'react'
import './CandleBody.css'
import Flames from './Flames'

function CandleBody() {
  return (
    <div className='candle-body'>
        <Flames/>
        <div className="candle-thread"></div>
    </div>
  )
}

export default CandleBody
