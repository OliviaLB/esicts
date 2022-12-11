import axios, { AxiosRequestConfig } from 'axios';
import { Blog, BlogData } from '../Components/blogs/Blog-Interfaces';

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

export async function getAllBlogs() {
	const Blogs: any = await client.get('/blogs/Blog/getBlogs');
	const transformedBlogs: [] = Blogs.data;
	return transformedBlogs;
}

export async function getSingleBlog(blogId: string) {
	const Blogs: Blog[] = await getAllBlogs();
	const result = Blogs.find((blog) => {
		return blog.id === blogId;
	});

	const loadedBlog = {
		id: blogId,
		...result,
	};

	console.log(loadedBlog);
	return loadedBlog;
}

export async function addBlog(blogData: BlogData) {
	blogData.imageId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
	console.log(blogData);
	client
		.post('/Blogs/Blog/UpdateBlog', blogData)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

export async function updateBlog(blogData: BlogData) {
	blogData.imageId = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
	client
		.post('/Blogs/Blog/UpdateBlog', blogData)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

export async function deleteBlog(blogId: string) {
	const blogURL = '/Blogs/Blog/DeleteBlog?blogId=';
	const blogEntry: string = blogURL + blogId;

	console.log(blogEntry);
	const deleteBlog = await client.delete(blogEntry).then((response) => {
		console.log(response);
	});
	console.log(deleteBlog);
}

export async function addImage(image: File | null) {
	client
		.post('/Blogs/Blog/UpdateBlogImage', image)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			return error;
		});
}

interface inquiry {
	id: string;
	firstName: string;
	lastName: string;
	mobile: string;
	email: string;
	message: string;
}
export async function postInquiry(inquiry: inquiry) {
	client
		.post('/Blogs/Blog/UpdateBlog', inquiry)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}
