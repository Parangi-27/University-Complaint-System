import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/register";



function App() {

	return (
		<Routes>
			{/* {user && <Route path="/" exact element={<Home />} />} */}
			
			<Route path="/login" exact element={<Login />} />
			<Route path="/register" exact element={<Register />} />
			</Routes>
	);
}

export default App;