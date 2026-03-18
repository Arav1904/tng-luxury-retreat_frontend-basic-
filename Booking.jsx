import { useState } from "react"
import "../styles/luxury.css"

function Booking(){

const [checkin,setCheckin]=useState("")
const [checkout,setCheckout]=useState("")

return(

<div className="bookingPage">

<h1>Book Your Stay</h1>

<div className="dateBox">

<input type="date" onChange={(e)=>setCheckin(e.target.value)}/>
<input type="date" onChange={(e)=>setCheckout(e.target.value)}/>

</div>

<h2>Available Suites</h2>

<div className="roomsGrid">

<div className="roomCard">
<h3>Deluxe Suite</h3>
<p>₹12,000 / night</p>
<button className="goldBtn">Book Now</button>
</div>

<div className="roomCard">
<h3>Executive Suite</h3>
<p>₹18,000 / night</p>
<button className="goldBtn">Book Now</button>
</div>

<div className="roomCard">
<h3>Presidential Suite</h3>
<p>₹30,000 / night</p>
<button className="goldBtn">Book Now</button>
</div>

</div>

</div>

)

}

export default Booking