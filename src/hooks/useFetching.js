import { useState } from "react";

export const useFetching = (callback) => {
	const [isPostsLoading, setIsPostsLoading] = useState(false)
	const [error, setError] = useState('')

	const getPosts = async (...args) => {
		try {
			setIsPostsLoading(true)
			await callback(...args)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsPostsLoading(false)
		}
	}

	return [getPosts, isPostsLoading, error]
} 