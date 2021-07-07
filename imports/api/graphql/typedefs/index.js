import { User } from "./User"
import { Post } from "./Post"

export const root = `
  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`

const schemaArray = [
	root,
	User,
	Post
]

export {
  schemaArray
}