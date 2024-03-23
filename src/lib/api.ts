import axios, { AxiosRequestConfig } from 'axios';
import swal from 'sweetalert';
import { Blog } from '../Components/blogs/Blog-Interfaces';

const headers: AxiosRequestConfig = {
	headers: {
		'Content-Type': 'application/json',
		accept: '*/*',
	},
	responseType: 'json',
};

const client = axios.create({
	baseURL: 'https://emstuartinjuries.com',
	headers: { Accept: 'application/json' },
});

export async function getAllBlogs() {
	const Blogs = await client.get('/Blog/getBlogs');
	const transformedBlogs: [] = Blogs.data;
	return transformedBlogs;
}

export async function getSingleBlog(blogId: string) {
	const response = await client.get(`/Blog/GetBlog?blogId=${blogId}`);

	const loadedBlog = {
		...response.data
	};

	return loadedBlog;
}

export async function addBlog(Blog: Blog) {
	client
		.post('/Blog/UpdateBlog', Blog)
		.then(function (response) {
			swal('Success!', 'Blog successfully added', 'success');
		})
		.catch(function (error) {
			swal('Oops!', error.message, 'error');
		});
}

export async function updateBlog(Blog: Blog) {
	client
		.post('/Blog/UpdateBlog', Blog)
		.then(function (response) {})
		.catch(function (error) {
			console.log(error);
		});
}

export async function deleteBlog(blogId: string) {
	const blogURL = '/Blog/DeleteBlog?blogId=';
	const blogEntry: string = blogURL + blogId;
	await client.delete(blogEntry).then((response) => {});
}

export async function deleteBlogImage(blogImageId: string) {
	const blogURL = '/Blog/DeleteBlogImage?blogId=';
	const blogImage: string = blogURL + blogImageId;
	await client.delete(blogImage).then((response) => {});
}

export const addImage = async (image: string, token: string) => {
	const response = await client.post('/Blog/UpdateBlogImage', { image, id: token }, headers);
	return response.data;
};

export const retrieveImage = async (ImageID: string) => {
	const response = await client.get(`/Blog/GetBlogImageData?blogImageId=${ImageID}`);
	return response.data;
};

export const updateBlogImage = async (image: string | null, ImageID: string) => {
	try {
		const payload = {
			id: ImageID,
			...(image && { image }),
		};
		await client.post('/Blog/UpdateBlogImage', payload);
	} catch (error: any) {
		swal('Oops!', error.message, 'error');
	}
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
			`/Blog/SendEmail?subject=${`Email from ${firstName} + ${lastName}`}&isHtml=true`,
			`<b>Name</b>: ${firstName} ${lastName} <br> <b>Email:</b> ${email} <br> <b>Phone Number:</b> ${mobile} <br> <b>Message:</b> ${message}`,
			headers
		)
		.then(function (response) {})
		.catch(function (error) {
			console.error(error);
			if (error instanceof Error) {
				let message = error.message;
				swal({
					title: 'Something went wrong',
					text: message,
					icon: 'error',
					dangerMode: true,
					buttons: {
						ok: 'OK',
					},
				} as any);
			}
		});
}
