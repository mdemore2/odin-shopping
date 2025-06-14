import "../styles/navbar.css"
import { Link } from "react-router-dom";

function NavBar({}){
    //TODO: update state
    return <div className="navbar">
        <h1>Le Shop</h1>
        <ul>
            <li><Link to="/home">Browse</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>

    </div>
}

export default NavBar;