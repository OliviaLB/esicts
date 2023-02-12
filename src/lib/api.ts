import axios, { AxiosRequestConfig } from 'axios';
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

	return loadedBlog;
}

export async function addBlog(blogData: BlogData) {
	client
		.post('/Blogs/Blog/UpdateBlog', blogData)
		.then(function (response) {})
		.catch(function (error) {
			console.log(error);
		});
}

export async function updateBlog(blogData: BlogData) {
	client
		.post('/Blogs/Blog/UpdateBlog', blogData)
		.then(function (response) {})
		.catch(function (error) {
			console.log(error);
		});
}

export async function deleteBlog(blogId: string) {
	const blogURL = '/Blogs/Blog/DeleteBlog?blogId=';
	const blogEntry: string = blogURL + blogId;
	const deleteBlog = await client.delete(blogEntry).then((response) => {});
}

export async function deleteBlogImage(blogImageId: string) {
	const blogURL = '/Blogs/Blog/DeleteBlogImage?blogId=';
	const blogImage: string = blogURL + blogImageId;
	const deleteBlogImage = await client.delete(blogImage).then((response) => {});
}

export const addImage = async (image: string, token: string) => {
	const response = await client.post('/Blogs/Blog/UpdateBlogImage', { image, id: token }, headers);
	return response.data;
};

export const retrieveImage = async (ImageID: string) => {
	const response = await client.get(`/Blogs/Blog/GetBlogImageData?blogImageId=${ImageID}`);
	return response.data;
};

export const updateBlogImage = async (image: string | null, ImageID: string) => {
	client
		.post('/Blogs/Blog/UpdateBlogImage', { id: ImageID, image })
		.then(function (response) {})
		.catch(function (error) {
			console.log(error);
		});
};

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
