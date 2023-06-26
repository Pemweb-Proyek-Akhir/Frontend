import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import update from 'immutability-helper';
import Head from 'next/head';
import axios from 'axios';
import tokenReducer from '@/reducer/tokenReducer';
import { ReducerContext } from '@/hooks/pageContext';
import { getUserToken, setUserToken } from '@/utils/storageUtil';

export default function Login() {
	const router = useRouter();
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const {
		token: { dispatch, state },
	} = useContext(ReducerContext);

	console.log(state);

	useEffect(() => {
		if (!!getUserToken()) {
			router.replace('/u');
		}
	}, []);

	const onSubmit = async e => {
		e.preventDefault();
		console.log(form);
		try {
			const request = await axios.post(`http://localhost:8000/api/login`, form);
			setUserToken(request.data.data);
			router.replace('/u');
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = e => {
		setForm(update(form, { [e.target.name]: { $set: e.target.value } }));
	};

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<div className='h-screen w-screen overflow-hidden'>
				<div className='auth-bg'>
					<form onSubmit={onSubmit}>
						<img src='/logo/logo-white.svg' width={250} className='mb-8' />
						<div className='bg-white p-8 w-[380px] rounded-md shadow-lg'>
							<div className='text-xl mb-6'>Hello, Welcome Back!</div>
							<div className='mb-1 text-sm'>Email</div>
							<input
								className='mb-6'
								placeholder='Input your email'
								name='email'
								onChange={handleChange}
								type='email'
								required
							/>
							<div className='text-sm mb-1'>Password</div>
							<input
								className='mb-6'
								type='password'
								placeholder='Input your password'
								name='password'
								onChange={handleChange}
								required
							/>
							<div className='flex justify-between mb-6 items-center'>
								<div className='flex items-center space-x-2'>
									<input className='w-3 h-3' type='checkbox' id='remember-me' />
									<label htmlFor='remember-me' className='text-sm font-medium'>
										Remember me
									</label>
								</div>
								<div className='text-flower-600 text-sm'>Lost Password?</div>
							</div>
							<button className='bg-flower-600 py-[10px] w-full rounded-lg px-5 text-white mb-6'>
								LOGIN
							</button>
							<div>
								<span className='text-gray-500 text-sm'>Not registered? </span>
								<span className='text-flower-600 text-sm'>
									<Link href={'/register'}>Create account</Link>
								</span>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
