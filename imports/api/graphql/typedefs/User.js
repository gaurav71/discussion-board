export const User = `
	type User {
		_id: String!
		email: String!
	}

	type Tokens {
		accessToken: String!
	}

	type UserAuth {
		user: User!
		tokens: Tokens!
	}

	input CreateUserInput {
		email: String!
		password: String!
	}

	input LoginUserInput {
		email: String!
		password: String!
	}

	extend type Query {
		login(input: LoginUserInput!): UserAuth!
	}

	extend type Mutation {
		createUser(input: CreateUserInput!): 	UserAuth!
	}
`;