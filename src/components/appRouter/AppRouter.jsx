import { Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../../router/index.js'
import { useContext } from 'react'
import { AuthContext } from '../../context/index.js'

const AppRouter = () => {
	const { isAuth } = useContext(AuthContext)

	return (
		isAuth
			?
			<Routes>
				{privateRoutes.map(route =>
					<Route
						key={route.path}
						path={route.path}
						element={<route.element />}
						exact={route.exact}
					/>
				)}
				<Route path="*" element={<Navigate to="/posts" />} />
			</Routes >
			:
			<Routes>
				{publicRoutes.map(route =>
					<Route
						key={route.path}
						path={route.path}
						element={<route.element />}
						exact={route.exact}
					/>
				)}
				<Route path="*" element={<Navigate to="/login" />} />
			</Routes >

	)
}

export default AppRouter