import React from 'react'
import { Navbar } from '../Navbar'
import { PostArea } from '../PostArea'
import { Posts } from '../Posts'

export const Dashboard = () => {
	return (
		<div className='dashboard flex-center'>
			<Navbar />
			<PostArea />
			<Posts />
		</div>
	)
}