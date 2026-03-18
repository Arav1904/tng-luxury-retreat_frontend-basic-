import "../styles/luxury.css"

function Home(){

return(

<div classname = "homePage">

{/* HERO */}

<section className="hero">

<div className="heroOverlay">

<h1 className="heroTitle">TNG Luxury Retreat</h1>

<p className="heroTag">Luxury Redefined</p>

<a href="/booking" className="heroButton">Book Your Stay</a>

</div>

</section>

{/* About Us */}

<section className="aboutSection">

<h2 className="sectionTitle">About TNG Luxury Retreat</h2>

<p>
TNG Luxury Retreat stands as a symbol of luxury, elegance, and
world-class hospitality. Ranked among the top emerging luxury
destinations in India, we offer an unmatched blend of comfort,
premium services, and curated experiences.
</p>

<p>
🏆 Awarded "Best Luxury Boutique Hotel 2025"<br/>
🏆 Certified by International Hospitality Association<br/>
🏆 Rated 5-Star Premium Experience by Guests
</p>

<p>
Our mission is to redefine luxury by combining modern architecture,
traditional warmth, and exceptional service standards inspired by
global hotel chains.
</p>

<p>
With over 10,000+ satisfied guests, TNG Luxury Retreat has set a benchmark in premium hospitality. Our architecture blends modern elegance with cultural richness, offering an unforgettable experience to every visitor.
</p>

<p>
From curated experiences to personalized concierge services, every detail is crafted to deliver excellence beyond expectations.
</p>

</section>

{/* TESTIMONIALS */}

<div className="testimonialGrid">

<div className="testimonialCard">
<p>"Absolutely luxurious stay. Felt like royalty."</p>
<h4>— Rahul Mehta</h4>
</div>

<div className="testimonialCard">
<p>"Best hotel experience in Mumbai."</p>
<h4>— Priya Shah</h4>
</div>

<div className="testimonialCard">
<p>"Ambience, food & service — all perfect."</p>
<h4>— Arjun Patel</h4>
</div>

<div className="testimonialCard">
<p>"Will definitely visit again!"</p>
<h4>— Sneha Kapoor</h4>
</div>

<div className="testimonialCard">
<p>"Luxury at its finest."</p>
<h4>— Vikram Joshi</h4>
</div>

<div className="testimonialCard">
<p>"Highly recommended 5-star stay."</p>
<h4>— Neha Verma</h4>
</div>

</div>

{/* HOW TO REACH */}

<section className="reachSection">

<h2 className="sectionTitle">How To Reach Us</h2>

<div className="reachGrid">

<div className="reachCard">
<h3>✈️ By Air</h3>
<p>30 minutes from Mumbai International Airport</p>
</div>

<div className="reachCard">
<h3>🚆 By Train</h3>
<p>15 minutes from Central Railway Station</p>
</div>

<div className="reachCard">
<h3>🚗 By Road</h3>
<p>Well connected via highways and city routes</p>
</div>

</div>

</section>

<section>

<h2 className="sectionTitle">Why Choose Us</h2>

<div className="reachGrid">

<div className="reachCard">
<h3>⭐ 5-Star Experience</h3>
<p>Luxury hospitality with premium services</p>
</div>

<div className="reachCard">
<h3>🏨 Elite Suites</h3>
<p>World-class interiors & comfort</p>
</div>

<div className="reachCard">
<h3>📍 Prime Location</h3>
<p>Located in the heart of Mumbai</p>
</div>

<div className="reachCard">
<h3>👨‍🍳 Fine Dining</h3>
<p>Curated by top chefs</p>
</div>

</div>

</section>

</div>

)

}

export default Home