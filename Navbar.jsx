import { Link } from "react-router-dom"
import "../styles/luxury.css"

function Navbar(){

return(

<nav className="navbar">

<h2 className="logo">
TNG <span>Luxury Retreat</span>
</h2>

<ul className="navLinks">

<li><Link to="/">Home</Link></li>
<li><Link to="/rooms">Rooms</Link></li>
<li><Link to="/restaurant">Dining</Link></li>
<li><Link to="/amenities">Amenities</Link></li>
<li><Link to="/gallery">Gallery</Link></li>
<li><Link to="/booking">Booking</Link></li>
<li><Link to="/contact">Contact</Link></li>

</ul>

<div className="navAuth">

<Link to="/login" className="loginBtn">Login</Link>
<Link to="/signup" className="signupBtn">Signup</Link>

</div>

</nav>

)

}

export default Navbar