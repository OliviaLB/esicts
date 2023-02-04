import axios, { AxiosRequestConfig } from 'axios';
import swal from 'sweetalert';
import { Blog, BlogData } from '../Components/blogs/Blog-Interfaces';

const headers: AxiosRequestConfig = {
	headers: {
		'Content-Type': 'application/json',
		accept: '*/*',
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

export async function addImage(image: File | null, token: string) {
	client
		.post('/Blogs/Blog/UpdateBlogImage', { image, id: token }, headers)
		.then(function (response) {})
		.catch(function (error) {
			console.log(error);
		});
}

export async function postInquiry(
	firstName: string,
	lastName: string,
	mobile: string,
	email: string,
	message: string
) {
	client
		.post(
			`/Blogs/Blog/SendEmail?subject=${`Email from ${firstName} + ${lastName}`}&isHtml=true`,
			`<b>Name</b>: ${firstName} ${lastName} <br> <b>Email:</b> ${email} <br> <b>Phone Number:</b> ${mobile} <br> <b>Message:</b> ${message}`,
			headers
		)
		.then(function (response) {})
		.catch(function (error) {
			alert(error);
		});
}
