import axios from 'axios';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';
import swal from 'sweetalert';

const getApiBaseAddress = (): string => {
	let result = window.location.origin;

	if (result.includes('localhost')) {
		result = 'http://www.ultimatesoftwaresolutions.com'; // http://localhost:3000/
	}

	return result; // + '/api/';
};

const client = axios.create({
	baseURL: getApiBaseAddress(),
	headers: { Accept: 'application/json' },
});

export async function SignIn(userName: string, password: string, rememberMe: boolean) {
	// 	try {
	// 		const history = useHistory();
	// 		const result = await client.post('/signin', {
	// 			userName,
	// 			password,
	// 			rememberMe,
	// 		});
	// 		const { token } = result.data;
	// 		localStorage.setItem('token', token);
	// 		history.push('/blogs');
	// 	} catch ((error) => {
	//         // Error
	//         if (!window.navigator.onLine) {
	// 			 swal(
	// 					'Error',
	// 					'You do not appear to be connected to the internet; please check your connection!',
	// 					'error'
	// 				);
	//         } else if (error.response.status === 404) {
	// 			 swal(
	// 						'Error',
	// 						'Login attempt failed, please verify the entered username and password!',
	// 						'error'
	// 					);
	//             console.log(error.request);
	//         } else {
	//             // Something happened in setting up the request that triggered an Error
	//             console.log('Error', error.message);
	//         }
	//         console.log(error.config);
	//     }
	// 	);
}

export const getUserIsLoggedIn = (): boolean => {
	// Check if token is present in local storage
	const token = localStorage.getItem('token');

	if (token) {
		// Token is present, so authentication is successful
		console.log('Authentication successful!');
		return true;
	} else {
		// Token is not present, so authentication failed
		console.log('Authentication failed!');
		return false;
	}
};

export function logout() {
	localStorage.removeItem('token');
}
