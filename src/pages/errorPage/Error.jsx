import classes from './Error.module.css'
import "../../styles/App.css"

const Error = () => {
	return (
		<div className={[classes.errorWrapper, '_page'].join(' ')}>
			<div><h1>Error 404</h1></div>
			<div><p>You went to a page that does not exist</p></div>
		</div>
	)
}

export default Error