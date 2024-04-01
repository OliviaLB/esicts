import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Blog } from '../Components/blogs/Blog-Interfaces';

import BlogForm from '../Components/blogs/BlogForm';
import useHttp from '../hooks/use-http';
import { addBlog } from '../lib/api';

const NewBlog = () => {
	const { sendRequest, status } = useHttp(addBlog);
	const history = useNavigate();

	useEffect(() => {
		if (status === 'completed') {
			history('/home');
		}
	}, [status, history]);

	const addBlogHandler = (Blog: Blog) => {
		sendRequest(Blog);
	};

	return (
		<BlogForm
			isLoading={status === 'pending'}
			onAddBlog={addBlogHandler}
		/>
	);
};

export default NewBlog;
