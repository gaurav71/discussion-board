import React, { useEffect, useState } from 'react';
import gql from "graphql-tag";
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom'
import { useLazyQuery } from "@apollo/react-hooks";	
import { useHistory } from 'react-router';
import { paths } from '../App';

const loginQuery =  gql`
  query login(
		$email: String!
		$password: String!
	) {
    login(input: {
			email: $email
			password: $password
		}) {
      user {
        _id
        email
      }
      tokens {
        accessToken
      }
    }
	}
`

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory()

  const [login, { loading, data, error }] = useLazyQuery(loginQuery, {
    variables: {
      email,
      password
    }
  })

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.login.tokens.accessToken)
      localStorage.setItem('userData', JSON.stringify(data.login.user))
      history.push(paths.DASHBOARD)
    }
  }, [data])

  const submit = e => {
    e.preventDefault();
    login()
  };

  return (
    <div className='auth-container flex-center'>
      <div>    
        <h4 className='auth-header'>Login</h4>
        <form className="auth-form" onSubmit={submit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            onChange={e => setEmail(e.target.value)}
            />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            onChange={e => setPassword(e.target.value)}
            />
          {error ? <p className='error'>{error.message}</p> : null}
          <button type="submit">
            {loading ? (
              <Loader
                type="ThreeDots"
                color="white"
                height={30}
                width={50}
              />
            ) : (
              'Log In'
            )}
            </button>
        </form>
        <div className='link-container'>
          {"do not have an account ?"}
          <Link to={paths.SIGNUP}> {' signup'} </Link>
        </div>
    </div>
  </div>
  );
};

