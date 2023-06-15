import { useState } from 'react'
import MyButton from './UI/button/MyButton.jsx'
import MyInput from './UI/input/MyInput.jsx'

const PostForm = ({ create }) => {
	const [post, setPost] = useState({
		title: '',
		description: ''
	})

	const addPost = (event) => {
		event.preventDefault()
		const newPost = {
			id: Date.now(),
			...post
		}
		create(newPost)

		setPost({
			title: '',
			description: ''
		})
	}

	return (
		<form>
			<MyInput
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				placeholder="title"
				type="text"
			/>
			<MyInput
				value={post.description}
				onChange={e => setPost({ ...post, description: e.target.value })}
				placeholder="description"
				type="text"
			/>
			<MyButton
				disabled={!post.title.trim()}
				onClick={addPost}
			>Create post</MyButton>
		</form>
	)
}

export default PostForm