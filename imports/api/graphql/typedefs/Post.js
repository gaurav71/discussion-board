export const Post = `
	type Post {
		_id: String!
		userId: String!
		userEmail: String
		body: String!
		createdOn: Float!
	}

	input CreatePostInput {
		body: String!
	}

	extend type Query {
		getLatestPosts: [Post!]!
	}

	extend type Mutation {
		createPost(input: CreatePostInput!): Post!
	}
`;