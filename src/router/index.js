import About from "../pages/aboutPage/About.jsx"
import Error from "../pages/errorPage/Error.jsx"
import Home from "../pages/homePage/Home.jsx"
import Login from "../pages/login/Login.jsx"
import PostIdPage from "../pages/postIdPage/PostIdPage.jsx"
import Posts from "../pages/postsPage/Posts.jsx"

export const privateRoutes = [
	{ path: '/', element: Home, exact: true },
	{ path: '/about', element: About, exact: true },
	{ path: '/posts', element: Posts, exact: true },
	{ path: '/posts/:id', element: PostIdPage, exact: true },
	{ path: '/error', element: Error, exact: true },
]

export const publicRoutes = [
	{ path: '/login', element: Login, exact: true },
	{ path: '/error', element: Error, exact: true },
]