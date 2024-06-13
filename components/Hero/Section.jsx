import image from "../../src/assets/section.jpg"
function Section(){
    return(
        <>
         <div className="section-container">
            <div className="left-section">
                <img src={image} alt="" />
            </div>
            <div className="right-section">
                <div className="right-contain">
                    <p className="para-head">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</p>
                    <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <button className="btn-sec">Get in Touch</button>
                </div>
            </div>
         </div>
        </>
    )
}
export default Section;