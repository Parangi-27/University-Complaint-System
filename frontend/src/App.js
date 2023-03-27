import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import Home from "./Component/Home/Home";
import Complain from "./Component/Complaint/Complain";
import Admin from "./Component/Admin/index"

function App() {

	return (
		<Routes>
			{/* {user && <Route path="/" exact element={<Home />} />} */}
			
			<Route path="/login" exact element={<Login />} />
			<Route path="/register" exact element={<Register />} />
			<Route path="/" exact element={<Home/>} />
			<Route path="/complain" exact element={<Complain/>} />
			<Route path="/admin" exact element={<Admin/>} />
			</Routes>
	);
}

export default App;