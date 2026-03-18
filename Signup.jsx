import "../styles/luxury.css"

function Signup(){

return(

<div className="authPage">

<div className="authBox">

<h1>Create Account</h1>

<input placeholder="Full Name"/>
<input placeholder="Email"/>
<input type="password" placeholder="Password"/>

<button className="goldBtn">Signup</button>

<p>Already a member? Login</p>

</div>

</div>

)

}

export default Signup