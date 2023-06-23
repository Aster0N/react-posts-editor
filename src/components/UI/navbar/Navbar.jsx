import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { useContext } from 'react'
import classes from './Navbar.module.css'
import MyButton from '../button/MyButton'

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)

	const logout = (event) => {
		event.preventDefault()
		setIsAuth(false)
		localStorage.removeItem('isAuth')
	}

	return (
		<div className={classes.navbar}>
			<div className={classes.navbarLinks}>
				<Link className={classes.link} to='/'>home</Link>
				<span>/</span>
				<Link className={classes.link} to='/about'>about</Link>
				<span>/</span>
				<Link className={classes.link} to='/posts'>posts</Link>
			</div>
			<MyButton disabled={!isAuth} className={isAuth && classes.logoutBtn} onClick={logout}>logout</MyButton>
		</div>
	)
}

export default Navbar