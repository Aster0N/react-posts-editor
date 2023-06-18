import { useState, useEffect } from 'react'
import PostList from '../components/PostList.jsx'
import PostForm from '../components/PostForm.jsx'
import MyModal from '../components/UI/modal/MyModal.jsx'
import MyButton from '../components/UI/button/MyButton.jsx'
import PostFilter from '../components/UI/filter/PostFilter.jsx'
import Loader from '../components/UI/loader/Loader.jsx'
import Pagination from '../components/UI/pagination/Pagination.jsx'
import { usePosts } from '../hooks/usePosts.js'
import { useFetching } from '../hooks/useFetching.js'
import PostsService from '../API/PostsService.js'
import { getPagesCount } from '../utils/pagesCount.js'
import "../styles/App.css"


const Pages = () => {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: "", query: "" })
	const [modalVisibility, setModalVisibility] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const [getPosts, isPostsLoading, postsFetchingError] = useFetching(async () => {
		const response = await PostsService.getAllPosts(limit, page)
		setPosts(response.data)
		const totalPages = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalPages, limit));
	})

	useEffect(() => {
		getPosts()
	}, [page])

	const createNewPost = (newPost) => {
		setPosts([...posts, newPost])
		setModalVisibility(false)
	}

	const deletePost = (postToDelete) => {
		setPosts(posts.filter(post => post.id !== postToDelete.id))
	}

	const changePage = (page) => {
		setPage(page)
	}

	return (
		<div className="_page">
			<MyButton onClick={() => setModalVisibility(true)}>Create post</MyButton>
			<MyModal
				visible={modalVisibility}
				setVisible={setModalVisibility}
			>
				<PostForm create={createNewPost} />
			</MyModal>
			<div className="divider-line"></div>
			<span>Sort by: </span>
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			{isPostsLoading
				? <Loader />
				: <PostList remove={deletePost} posts={sortedAndSearchedPosts} />
			}
			{postsFetchingError &&
				<div className='posts-fetching-errror'>
					<h2>
						Error<br />
					</h2>
					<span>{postsFetchingError}</span>
				</div>
			}
			<Pagination
				totalPages={totalPages}
				page={page}
				changePage={changePage}
			/>
		</div>
	);
}

export default Pages;