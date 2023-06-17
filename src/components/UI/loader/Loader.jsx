import classes from './Loader.module.css'

const Loader = () => {
	return (
		<div className={classes.loader}>
			<div className={classes.loaderWrapper}>
				<span className={classes.loaderTitle}>loading</span>
				<span className={classes.loaderLine}></span>
			</div>
		</div>
	)
}

export default Loader