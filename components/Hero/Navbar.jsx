 import logo from "../../src/assets/logo.jpg"
 import { Link } from "react-router-dom";
 
 function Navbar(){
    return(
        <>
         <nav>
            <div className="icons">
                <img src={logo} alt="" />
                <h4>GeeksFood</h4>
            </div>
            <div className="menu">
                <ul>

                    <Link to="/" ><li>Home</li></Link>
                    <Link to="/quote" ><li>Quote</li></Link>
                    <Link to="/restaurant" ><li>Restaurant</li></Link>
                    <Link to="/food" ><li>Foods</li></Link>
                    <Link to="/contact" ><li>Contact</li></Link>
                </ul>
            </div>
            <button className="btn">Get Started</button>
         </nav>
        </>
    )
 }
 export default Navbar;