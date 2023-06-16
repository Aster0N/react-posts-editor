import classes from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
	const modelClasses = [classes.modelBody]

	if (visible) {
		modelClasses.push(classes.active)
	}

	return (
		<div
			className={modelClasses.join(' ')}
			onClick={() => setVisible(false)}
		>
			<div className={classes.modelContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default MyModal