

function Quotes({quote,author}){

    return(
        <>
         <div className="quotes-container">
            <h3>{quote}</h3>
            <p>{author}</p>
         </div>
        </>
    )
}
export default Quotes;