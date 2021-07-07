import { UserCollection } from "../dbCollection/userCollection"
import { createJWT, insertHelper } from "../../utils"

export const createUserController = async(input) => {
	const { email, password } = input

	const userExists = await UserCollection.findOne({ email })

	if (userExists) {
		throw new Error('User With Email Already Exists')
	}

	const user = await insertHelper(UserCollection, {
		email,
		password,
		createdOn: Date.now()
	})
	 
	const accessToken = createJWT(user._id)

	return {
		user,
		tokens: {
			accessToken
		}
	}
}

export const loginUserController = async(input) => {
	const { email, password } = input

	const user = await UserCollection.findOne({
		email,
		password
	})

	if (!user) {
		throw new Error('User not found')
	}

	const accessToken = createJWT(user._id)

	return {
		user,
		tokens: {
			accessToken
		}
	}
}