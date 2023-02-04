import axios, { AxiosRequestConfig } from 'axios';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';
import swal from 'sweetalert';
import { useState } from 'react';

const headers: AxiosRequestConfig = {
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
	},
	responseType: 'json',
};

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

export async function SignIn(userName: string, password: string) {
	try {
		const result = await client.post(
			`/Blogs/Blog/Login?userName=${userName}`,
			`"${password}"`,
			headers
		);
		localStorage.setItem('token', result.data);
		window.location.reload();
	} catch (error: any) {
		alert(error);
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
		console.log('Authentication successful!');
		return true;
	} else {
		// Token is not present, so authentication failed
		console.log('Authentication failed!');
		return false;
	}
};

export function Signout() {
	localStorage.removeItem('token');
}
