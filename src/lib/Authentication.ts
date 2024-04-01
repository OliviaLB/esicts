import axios, { AxiosRequestConfig } from 'axios';
import swal from 'sweetalert';

const headers: AxiosRequestConfig = {
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
	},
	responseType: 'json',
};

const client = axios.create({
	baseURL: 'https://emstuartinjuries.com/',
	headers: { Accept: 'application/json' },
});

export async function SignIn(userName: string, password: string) {
	try {
		const result = await client.post(`/Blog/Login?userName=${userName}`, `"${password}"`, headers);
		localStorage.setItem('token', result.data);
		window.location.reload();
	} catch (error: any) {
		alert(error.message);

		// Error
		if (!window.navigator.onLine) {
			swal(
				'Error',
				'You do not appear to be connected to the internet; please check your connection!',
				'error'
			);
		} else if (error.response.status === 404) {
			swal(
				'Error',
				'Login attempt failed, please verify the entered username and password!',
				'error'
			);
			console.log(error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error', error.message);
		}
		console.log(error.config);
	}
}

export const getUserIsLoggedIn = (): boolean => {
	// Check if token is present in local storage
	const token = localStorage.getItem('token');

	if (token) {
		// Token is present, so authentication is successful
		return true;
	} else {
		// Token is not present, so authentication failed
		return false;
	}
};

export function Signout() {
	localStorage.removeItem('token');
}
