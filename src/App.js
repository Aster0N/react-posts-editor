import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from 'react-router-dom'
import Navbar from './components/UI/navbar/Navbar.jsx'
import Home from './pages/homePage/Home.jsx'
import Pages from './pages/postsPage/Posts.jsx'
import About from './pages/aboutPage/About.jsx'
import Error from './pages/errorPage/Error.jsx'
import "./styles/App.css"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/pages" element={<Pages />} />
					<Route path="/error" element={<Error />} />
					<Route path="*" element={<Navigate to="/error" />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App