import "../styles/luxury.css"

function Restaurant(){

return(

<div className="restaurantPage">

<h1 className="sectionTitle">TNG Signature Dining</h1>

<p className="restaurantIntro">
Experience world-class dining with royal Indian heritage and global cuisines crafted by award-winning chefs.
</p>

<div className="menuGrid">

<div className="menuCard">
<img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"/>
<h3>TNG Royal Thali</h3>
<p>Authentic Indian luxury platter</p>
</div>

<div className="menuCard">
<img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"/>
<h3>Italian Gourmet</h3>
<p>Wood-fired pizzas & pasta</p>
</div>

<div className="menuCard">
<img src="https://images.unsplash.com/photo-1553621042-f6e147245754"/>
<h3>Seafood Delight</h3>
<p>Fresh coastal cuisine</p>
</div>

</div>

<h2 className="sectionTitle">Chef’s Special</h2>

<div className="chefGrid">

<div className="chefCard">
<img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"/>
<h3>Signature Butter Chicken</h3>
<p>Rich, creamy and crafted with royal spices</p>
</div>

<div className="chefCard">
<img src="https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Truffle Risotto"/>
<h3>Truffle Risotto</h3>
<p>Italian delicacy with luxury truffle infusion</p>
</div>

<div className="chefCard">
<img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80"/>
<h3>Exotic Desserts</h3>
<p>Handcrafted sweets for a perfect finish</p>
</div>

</div>

</div>

)

}

export default Restaurant