import classes from './PostsFilter.module.css'

import MySelect from '../select/MySelect.jsx'
import MyInput from '../input/MyInput.jsx'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div className={classes.postFilterWrapper}>
			<MySelect
				value={filter.sort}
				className={classes.mySelect}
				defaultValue="date of creation"
				options={[
					{ value: "title", name: "title" },
					{ value: "body", name: "description" }
				]}
				onChange={value => setFilter({ ...filter, sort: value })}
			/>
			<MyInput
				value={filter.query}
				placeholder="Search"
				onChange={event => setFilter({ ...filter, query: event.target.value })}
			/>
		</div>
	)
}

export default PostFilter