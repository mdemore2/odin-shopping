import "../styles/navbar.css"

function NavBar({}){
    //TODO: update state
    return <div className="navbar">
        <h1>Le Shop</h1>
        <ul>
            <li><a href="home">Browse</a></li>
            <li><a href="cart">Cart</a></li>
        </ul>

    </div>
}

export default NavBar;