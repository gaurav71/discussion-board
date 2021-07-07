import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React, { useState } from 'react'
import Loader from 'react-loader-spinner'

const createPostMutation = gql`
	mutation createPost(
		$body: String!
	) {
		createPost(input: {
			body: $body
		}) {
			_id
			body
			userEmail
			userId
			createdOn
		}
	}
`

export const PostArea = () => {
	const [showPostContent, setShowPostContext] = useState(false)
	const [body, setBody] = useState('')
	const [createPost, { loading }] = useMutation(createPostMutation)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!body) {
			return
		}

		createPost({
			variables: {
				body
			},
			refetchQueries: ['getLatestPosts']
		})
		.then((result) => {
			setBody('')
			setShowPostContext(false)
			console.log(result)
		})
		.catch((error) => {
			console.log(error)
		})
	}

	return (
		<div className='main-container flex-center'>
			<button
				className='ask-to-post'
				onClick={() => setShowPostContext(o => !o)}
			>
				{showPostContent ? 'Hide' : 'Wanna Post ?'}
			</button>
			{showPostContent && (
				<form className='form post-form'>
					<textarea
						className='text-area'
						placeholder='Content'
						onChange={e => setBody(e.target.value)}
					/>
					<button
						className='submit-post'
						onClick={handleSubmit}
					>
						{loading ? (
							<Loader
								type="ThreeDots"
								color="white"
								height={30}
								width={50}
							/>
						) :
							'Post'
						}
					</button>
				</form>
			)}
		</div>
	)
}