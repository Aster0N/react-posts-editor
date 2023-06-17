import { useState } from 'react'
import PostList from './components/PostList.jsx'
import PostForm from './components/PostForm.jsx'
import MyModal from './components/UI/modal/MyModal.jsx'
import MyButton from './components/UI/button/MyButton.jsx'
import PostFilter from './components/UI/filter/PostFilter.jsx'
import { usePosts } from './hooks/usePosts.js'
import "./styles/App.css"


function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: "", query: "" })
	const [modalVisibility, setModalVisibility] = useState(false)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

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