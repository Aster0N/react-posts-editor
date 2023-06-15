import PostItem from "./PostItem"

const PostList = ({ posts, remove }) => {
	if (!posts.length) {
		return (
			<h1 className="main-title">Posts not found</h1>
		)
	}

	return (
		<div className="posts-list">
			<h1 className="main-title">Your posts</h1>
			{posts.map(post =>
				<PostItem
					remove={remove}
					post={post}
					key={post.id}
				/>
			)}
		</div>
	)
}

export default PostList