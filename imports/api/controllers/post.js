import { checkAuth, insertHelper } from "../../utils"
import { PostCollection } from "../dbCollection/postCollection"
import { UserCollection } from "../dbCollection/userCollection"

export const getLatestPostsController = async(context) => {
	checkAuth(context)
	return PostCollection.find({}, { sort: { createdOn: -1 }})
}

export const createPostController = async(input, context) => {
	const userId = checkAuth(context)
	const user = await UserCollection.findOne({ _id: userId })

	const post = await insertHelper(PostCollection, {
		...input,
		userId,
		userEmail: user.email,
		createdOn: Date.now()
	})

	return post
}
