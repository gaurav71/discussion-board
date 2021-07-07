import React from 'react'
import Loader from 'react-loader-spinner';
import gql from "graphql-tag";
import { useQuery } from '@apollo/react-hooks'
import { Post } from '../Post'

const getLatestPosts =  gql`
  query getLatestPosts {
    getLatestPosts {
      _id
			userId
			userEmail
			body
			createdOn
    }
	}
`

export const Posts = () => {
	const { loading, data } = useQuery(getLatestPosts)

	if (loading) {
		return <Loader type="ThreeDots" color="white" height={30} width={50} />
	}

	return (
		<div className='main-container'>
			{data.getLatestPosts.map((post) => <Post key={post._id} post={post} />)}
		</div>
	)
}