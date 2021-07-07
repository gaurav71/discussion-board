import React, { useState } from 'react';
import gql from "graphql-tag";
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom'
import { useMutation } from "@apollo/react-hooks";	
import { useHistory } from 'react-router';
import { paths } from '../App';

const createUserMutation =  gql`
  mutation createUser(
		$email: String!
		$password: String!
	) {
    createUser(input: {
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

export const SignUp = () => {
	const [createUser, { loading, error }] = useMutation(createUserMutation);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const submit = e => {
    e.preventDefault();

		createUser({
      variables: {
				email,
				password
      }
    })
    .then((result) => {
      localStorage.setItem('token', result.data.createUser.tokens.accessToken)
      localStorage.setItem('userData', JSON.stringify(result.data.createUser.user))
      history.push(paths.DASHBOARD)
    })
    .catch(e => {
      console.error('Error', e)
    });
  };

  return (
    <div className='flex-center auth-container'>
      <div>    
        <h4 className='auth-header'>Sign Up</h4>
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
              'Sign Up'
            )}
            </button>
        </form>
        <div className='link-container'>
          {"Already have an account ?"}
          <Link to={paths.LOGIN}> {' login'} </Link>
        </div>
    </div>
  </div>
  );
};