import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/homePage/Home.jsx'
import Pages from '../../pages/postsPage/Posts.jsx'
import About from '../../pages/aboutPage/About.jsx'
import Error from '../../pages/errorPage/Error.jsx'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/pages" element={<Pages />} />
			<Route path="/error" element={<Error />} />
			<Route path="*" element={<Navigate to="/error" />} />
		</Routes>
	)
}

export default AppRouter