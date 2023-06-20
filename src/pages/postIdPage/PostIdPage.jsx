import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useFetching } from "../../hooks/useFetching"
import PostsService from "../../API/PostsService"
import Loader from '../../components/UI/loader/Loader'
import "../../styles/App.css"
import classes from './PostIdPage.module.css'

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})

	const [fetchPostById, isPostLoading, postFetchingError] = useFetching(async (id) => {
		const response = await PostsService.getPostById(id)
		setPost(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id)
	}, [])

	return (
		<div className='_page'>

			<div>
				{isPostLoading
					? <Loader />
					: <h1>Post <span className={classes.postId}>#{params.id}</span></h1>
				}
				{postFetchingError &&
					<div className="error-block">
						<h2>
							Error<br />
						</h2>
						<span>{postFetchingError}</span>
					</div>
				}
			</div>
		</div>
	)
}

export default PostIdPage