import { usePagesPagination } from '../../../hooks/usePagesPagination.js'
import MyButton from '../button/MyButton.jsx'
import classes from './Pagination.module.css'

const Pagination = ({ totalPages, page, changePage }) => {
	const pagesArray = usePagesPagination(totalPages)

	return (
		<div className={classes.pageNavigation}>
			{pagesArray.map(p =>
				<MyButton
					key={p}
					className={
						page === p
							? [classes.pageButton, classes.pageActive].join(' ')
							: classes.pageButton
					}
					onClick={() => changePage(p)}
				> {p}</MyButton>
			)}
		</div>
	)
}

export default Pagination