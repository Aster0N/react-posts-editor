import MyButton from "./UI/button/MyButton"

const PostItem = ({ post, remove }) => {
	return (
		<div className="post-item">
			<div className="post-info">
				<div className="post-title">{post.title}</div>
				<span className="post-id"># {post.id}</span>
				<div className="post-description">{post.body}</div>
			</div>
			<div className="post-actions">
				<MyButton
					onClick={() => remove(post)}
					className="delete-post-btn"
				>delete</MyButton>
			</div>
		</div>
	)
}

export default PostItem