import { createUser, login } from './user'
import { createPost, getLatestPosts } from './post'

export const queries = {
	login,
	getLatestPosts,
}

export const mutations = {
	createUser,
	createPost,
}