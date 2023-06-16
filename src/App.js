import { useState, useMemo } from 'react'
import PostList from './components/PostList.jsx'
import PostForm from './components/PostForm.jsx'
import MyModal from './components/UI/modal/MyModal.jsx'
import MyButton from './components/UI/button/MyButton.jsx'
import PostFilter from './components/UI/filter/PostFilter.jsx'
import "./styles/App.css"


function App() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "React JS",
			description: "Lorem it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
		},
	])
	const [filter, setFilter] = useState({ sort: "", query: "" })
	const [modalVisibility, setModalVisibility] = useState(false)

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			if (filter.sort === "default") {
				return [...posts].sort((a, b) => a.id - b.id)
			}
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts])

	const createNewPost = (newPost) => {
		setPosts([...posts, newPost])
		setModalVisibility(false)
	}

	const deletePost = (postToDelete) => {
		setPosts(posts.filter(post => post.id !== postToDelete.id))
	}


	return (
		<div className="App">
			<MyButton
				style={{ margin: "40px 0 0 0" }}
				onClick={() => setModalVisibility(true)}
			>Create post</MyButton>
			<MyModal
				visible={modalVisibility}
				setVisible={setModalVisibility}
			>
				<PostForm create={createNewPost} />
			</MyModal>
			<div className="divider-line"></div>
			<span className="">Sort by: </span>
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<PostList remove={deletePost} posts={sortedAndSearchedPosts} />
		</div>
	);
}

export default App;