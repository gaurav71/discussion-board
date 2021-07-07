import React from 'react'

const formatTime = (stamp) => {
	const d = new Date(stamp)
	const date = d.getDate()
	const month = d.getMonth()+1
	const year = d.getFullYear()
	const hours = d.getHours() < 10 ? '0'+d.getHours() : d.getHours()
	const minutes = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes()

	return `${date}/${month}/${year} ${hours}:${minutes}`
}

export const Post = ({ post }) => {
	return (
		<div className='post-container'>
			<p>{post.body}</p>
			<div className='post-footer'>
				<p>{post.userEmail}</p>
				<p>{formatTime(post.createdOn)}</p>
			</div>
		</div>
	)
}