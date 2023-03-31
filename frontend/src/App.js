import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Home from "./Component/Home/Home";
import Complain from "./Component/Complaint/Complain";
import Admin from "./Component/Admin/index"
import Userprofile from "./Component/Userprofile";
// import Error from "./Error/Error.js"
function App() {

	return (
		<Routes>
			{/* {user && <Route path="/" exact element={<Home />} />} */}
			
			<Route path="/login" exact element={<Login />} />
			<Route path="/register" exact element={<Register />} />
			<Route path="/" exact element={<Home/>} />
			<Route path="/home" exact element={<Home/>} />
			<Route path="/complain" exact element={<Complain/>} />
			<Route path="/admin" exact element={<Admin/>} />
			<Route path="/userpro" exact element={<Userprofile/>} />
			{/* <Route path="*" exact element={<Error/>} /> */}
			</Routes>
	);
}

export default App;