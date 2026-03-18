import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar.jsx"

import Home from "./pages/Home.jsx"
import Rooms from "./pages/Rooms.jsx"
import Amenities from "./pages/Amenities.jsx"
import Restaurant from "./pages/Restaurant.jsx"
import Gallery from "./pages/Gallery.jsx"
import Booking from "./pages/Booking.jsx"
import Contact from "./pages/Contact.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
// import Signup from "./pages/Signup.jsx"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/rooms" element={<Rooms/>}/>
<Route path="/amenities" element={<Amenities/>}/>
<Route path="/restaurant" element={<Restaurant/>}/>
<Route path="/gallery" element={<Gallery/>}/>
<Route path="/booking" element={<Booking/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

</Routes>

</BrowserRouter>

)

}

export default App