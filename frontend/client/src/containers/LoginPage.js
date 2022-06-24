import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetRegistered } from 'features/user';
import Layout from 'components/Layout';

const LoginPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetRegistered());
	}, []);

	return (
		<Layout title='Auth Site | Login' content='Login page'>
			<h1>Login</h1>
		</Layout>
	);
};

export default LoginPage;
