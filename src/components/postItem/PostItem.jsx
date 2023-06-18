import MyButton from "../UI/button/MyButton"
import classes from './PostItem.module.css'

const PostItem = ({ post, remove }) => {
	return (
		<div className={classes.postItem}>
			<div className={classes.postInfo}>
				<div className={classes.postTitle}>{post.title}</div>
				<span className={classes.postId}># {post.id}</span>
				<p>{post.body}</p>
			</div>
			<div className={classes.postActions}>
				<MyButton
					onClick={() => remove(post)}
					className={classes.deletePostBtn}
				>delete</MyButton>
			</div>
		</div>
	)
}

export default PostItem