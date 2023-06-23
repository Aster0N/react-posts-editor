import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/UI/navbar/Navbar.jsx'
import AppRouter from './components/appRouter/AppRouter.jsx'
import { AuthContext } from './context'
import "./styles/App.css"

function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('isAuth')) {
			setIsAuth(true)
		}
		setIsLoading(false)
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth,
				isLoading
			}}
		>
			<div className='App'>
				<BrowserRouter>
					<Navbar />
					<AppRouter />
				</BrowserRouter>
			</div>
		</AuthContext.Provider>
	)
}

export default App