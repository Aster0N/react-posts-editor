import { useState } from "react";

export const useFetching = (callback) => {
	const [isPostsLoading, setIsPostsLoading] = useState(false)
	const [error, setError] = useState('')

	const getPosts = async () => {
		try {
			setIsPostsLoading(true)
			await callback()
		} catch (error) {
			setError(error)
		} finally {
			setIsPostsLoading(false)
		}
	}

	return [getPosts, isPostsLoading, error]
} 