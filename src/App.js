import { useState, useEffect } from 'react'
import PostList from './components/PostList.jsx'
import PostForm from './components/PostForm.jsx'
import MyModal from './components/UI/modal/MyModal.jsx'
import MyButton from './components/UI/button/MyButton.jsx'
import PostFilter from './components/UI/filter/PostFilter.jsx'
import Loader from './components/UI/loader/Loader.jsx'
import { usePosts } from './hooks/usePosts.js'
import { useFetching } from './hooks/useFetching.js'
import PostsService from './API/PostsService.js'
import "./styles/App.css"


function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: "", query: "" })
	const [modalVisibility, setModalVisibility] = useState(false)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const [getPosts, isPostsLoading, postsFetchingError] = useFetching(async () => {
		const posts = await PostsService.getAllPosts()
		setPosts(posts)
	})

	useEffect(() => {
		getPosts()
	}, [])

	const createNewPost = (newPost) => {
		setPosts([...posts, newPost])
		setModalVisibility(false)
	}

	const deletePost = (postToDelete) => {
		setPosts(posts.filter(post => post.id !== postToDelete.id))
	}


	return (
		<div className="App">
			<MyButton onClick={() => setModalVisibility(true)}>Create post</MyButton>
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
			{
				isPostsLoading
					? <Loader />
					: <PostList remove={deletePost} posts={sortedAndSearchedPosts} />
			}
			{
				postsFetchingError &&
				<div className='posts-fetching-errror'>
					<h2>
						Error<br />
					</h2>
					<span>{postsFetchingError}</span>
				</div>
			}
		</div>
	);
}

export default App;