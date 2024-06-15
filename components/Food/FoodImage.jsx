

import React from 'react'

function FoodImage({url}) {
  return (
    <>
     <div className="food">
        <img src={url} alt="" />
     </div>
    </>
  )
}

export default FoodImage