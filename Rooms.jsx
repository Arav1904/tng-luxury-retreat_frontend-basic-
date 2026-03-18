import "../styles/luxury.css"

function Rooms(){

return(

<div className="roomsPage">

<h1>Our Luxury Suites</h1>

<div className="roomsGrid">

<div className="roomCard">
<img src="https://images.unsplash.com/photo-1566073771259-6a8506099945"/>
<h3>Deluxe Suite</h3>
<p>₹12,000 / night</p>
</div>

<div className="roomCard">
<img src="https://images.unsplash.com/photo-1590490360182-c33d57733427"/>
<h3>Executive Suite</h3>
<p>₹18,000 / night</p>
</div>

<div className="roomCard">
<img src="https://images.unsplash.com/photo-1582719508461-905c673771fd"/>
<h3>Presidential Suite</h3>
<p>₹30,000 / night</p>
</div>

</div>

</div>

)

}

export default Rooms