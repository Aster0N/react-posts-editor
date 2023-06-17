import axios from 'axios'

export default class PostsService {
	static async getAllPosts() {
		const URL = 'https://jsonplaceholder.typicode.com/posts'
		const response = await axios.get(URL)
		return response.data
	}
}