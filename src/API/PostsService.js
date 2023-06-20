import axios from 'axios'

export default class PostsService {
	static async getAllPosts(limit = 10, page = 1) {
		const URL = 'https://jsonplaceholder.typicode.com/posts'
		const response = await axios.get(URL, {
			params: {
				_limit: limit,
				_page: page
			}
		})
		return response
	}

	static async getPostById(id) {
		const URL = `https://jsonplaceholder.typicode.com/posts/${id}`
		const response = await axios.get(URL)
		return response
	}
}