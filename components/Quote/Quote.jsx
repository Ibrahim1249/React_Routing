import Quotes from "./Quotes";
import {quotes} from "./quote.js";
import "./Quote.css"

function Quote() {
  return (
    <>
        <div className="wrapper">
         {quotes.map((item)=> <Quotes quote={item.quote} author={item.author}/>)}
        </div>
     
    </>
  )
}

export default Quote