import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/UI/navbar/Navbar.jsx'
import AppRouter from './components/appRouter/AppRouter.jsx'
import "./styles/App.css"

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<AppRouter />
			</BrowserRouter>
		</div>
	)
}

export default App