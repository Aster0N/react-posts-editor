import About from "../pages/aboutPage/About.jsx"
import Error from "../pages/errorPage/Error.jsx"
import Home from "../pages/homePage/Home.jsx"
import Login from "../pages/login/Login.jsx"
import PostIdPage from "../pages/postIdPage/PostIdPage.jsx"
import Posts from "../pages/postsPage/Posts.jsx"

export const privateRoutes = [
	{ path: '/', element: Home },
	{ path: '/about', element: About },
	{ path: '/posts', element: Posts },
	{ path: '/posts/:id', element: PostIdPage },
	{ path: '/error', element: Error },
]

export const publicRoutes = [
	{ path: '/login', element: Login },
	{ path: '/error', element: Error },
]