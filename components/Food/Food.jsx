

import {restaurants} from "./food"
import FoodImage from "./FoodImage"
import "./Food.css"

function Food() {
  return (
 <>
   <div className="food-container">
     {restaurants.map((item,index)=>{
        return <FoodImage key={index} url={item.image}/>
     })}
   </div>
 </>
  )
}

export default Food