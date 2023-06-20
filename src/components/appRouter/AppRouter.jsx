import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/homePage/Home.jsx'
import Posts from '../../pages/postsPage/Posts.jsx'
import About from '../../pages/aboutPage/About.jsx'
import Error from '../../pages/errorPage/Error.jsx'
import PostIdPage from '../../pages/postIdPage/PostIdPage.jsx'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route exact path="/posts" element={<Posts />} />
			<Route exact path="/posts/:id" element={<PostIdPage />} />
			<Route path="/error" element={<Error />} />
			<Route path="*" element={<Navigate to="/error" />} />
		</Routes>
	)
}

export default AppRouter