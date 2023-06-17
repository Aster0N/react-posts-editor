import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from "./PostItem"

const PostList = ({ posts, remove }) => {
	return (
		<div className="posts-list">
			{
				!posts.length
					? <h1 className="main-title">Posts not found</h1>
					: <h1 className="main-title">Your posts</h1>
			}
			<TransitionGroup>
				{posts.map(post =>
					<CSSTransition
						key={post.id}
						timeout={200}
						classNames="post-item"
					>
						<PostItem
							remove={remove}
							post={post}
						/>
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	)
}

export default PostList