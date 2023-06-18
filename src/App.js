import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/UI/navbar/Navbar.jsx'
import Home from './pages/Home.jsx'
import Pages from './pages/Pages.jsx'
import About from './pages/About.jsx'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/pages" element={<Pages />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App