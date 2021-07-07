import React from 'react'
import { useHistory } from 'react-router'
import { paths } from '../App'

export const Navbar = () => {
	const history = useHistory()

	const logout = () => {
		localStorage.removeItem('userData')
		localStorage.removeItem('token')
		history.replace(paths.LOGIN)
	}

	return (
		<header>
			<button
				className='logout-button'
				onClick={logout}
			>
				Logout
			</button>
		</header>
	)
}