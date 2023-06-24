import { useContext } from 'react'
import MyButton from "../../components/UI/button/MyButton"
import MyInput from "../../components/UI/input/MyInput"
import { AuthContext } from '../../context/index.js'
import "../../styles/App.css"
import classes from './Login.module.css'

const Login = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)

	const login = (event) => {
		event.preventDefault()
		setIsAuth(true)
		localStorage.setItem('isAuth', 'true')
	}

	return (
		<div className={classes.loginPage}>
			<h1 className="main-title">Login</h1>
			<form onSubmit={login}>
				<MyInput placeholder="email" type="email" />
				<MyInput placeholder="password" type="password" />
				<MyButton>Log in</MyButton>
			</form>
		</div>
	)
}

export default Login