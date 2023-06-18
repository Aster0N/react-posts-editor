import classes from './MyButton.module.css'

const MyButton = ({ children, ...props }) => {
	return (
		<button {...props} className={[classes.myButton, props.className].join(' ')}>
			{children}
		</button>
	)
}

export default MyButton