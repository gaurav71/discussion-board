import jwt from 'jsonwebtoken'
// store in config or .env
export const jwtSecretKey = 'someSecretKey'

export const createJWT = (userId) => {
	return jwt.sign({
		exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
		userId
	}, jwtSecretKey)
}

export const decodeJWT = (token) => {
	return jwt.verify(token, jwtSecretKey)
}

export const checkAuth = (context) => {
	if (!context.req.headers.authorization) {
		throw new Error('Not Authenticated')
	}

	const decoded = decodeJWT(context.req.headers.authorization)

	return decoded.userId
}

export const insertHelper = async(collection, doc) => new Promise((resolve, reject) => {
	collection.insert(doc, (err, data) => {
		if (err) return reject(err)
		if (data) return resolve({
			...doc,
			_id: data
		})
	})
})