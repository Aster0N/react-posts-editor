import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={classes.navbar}>
			<Link className={classes.link} to='/'>home</Link>
			<span>/</span>
			<Link className={classes.link} to='/about'>about</Link>
			<span>/</span>
			<Link className={classes.link} to='/pages'>pages</Link>
		</div>
	)
}

export default Navbar