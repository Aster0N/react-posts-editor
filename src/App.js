import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/UI/navbar/Navbar.jsx'
import AppRouter from './components/appRouter/AppRouter.jsx'
import { AuthContext } from './context'
import "./styles/App.css"

function App() {
	const [isAuth, setIsAuth] = useState(false)

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth
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