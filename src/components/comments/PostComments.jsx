import "../../styles/App.css"
import classes from './PostComments.module.css'

const PostComments = ({ comments }) => {
	if (!comments.length) {
		return (
			<h1 className="main-title">No comments yet</h1>
		)
	}

	return (
		<>
			<h1 className="main-title">Comments</h1>
			<div className={classes.commentsWrapper}>
				{comments.map(comment =>
					<div key={comment.name} className={classes.postComment}>
						<div className={classes.commentUser}>{comment.email}</div>
						<p>- {comment.body}</p>
					</div>
				)}
			</div>
		</>
	)
}

export default PostComments