import { Routes, Route, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";
// import NavbarLong from "./components/Navbar/Navbar";
import Navbar from "./components/Navbar";
import Home from "./components/HomePage";
import Login from "./components/Login/Login";
// import Post from "./components/Home/Post";
// import SignUp from "./components/Signup/SignUpPage";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const getUser = () => {
		  fetch("http://localhost:5001/auth/login/success", {
			method: "GET",
			credentials: "include",
			headers: {
			  Accept: "application/json",
			  "Content-Type": "application/json",
			  "Access-Control-Allow-Credentials": true,
			},
		  })
			.then((response) => {
			  if (response.status === 200) return response.json();
			  throw new Error("authentication has been failed!");
			})
			.then((resObject) => {
			  setUser(resObject.user);
			})
			.catch((err) => {
			  console.log(err);
			});
		};
		getUser();
	  }, []);

	return (
			<div>
			<Navbar user={user} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
				path="/login"
				element={user ? <Navigate to="/" /> : <Login />}
				/>
			</Routes>
			</div>
		
	);
}

export default App;
