import {
	getLatestPostsController,
	createPostController,
} from '../../controllers/post'

export const getLatestPosts = (parent, args, context, info) => {
  return getLatestPostsController(context)
}

export const createPost = (parent, args, context, info) => {
  return createPostController(args.input, context)
}