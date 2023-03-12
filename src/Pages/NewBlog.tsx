import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BlogData } from '../Components/blogs/Blog-Interfaces';

import BlogForm from '../Components/blogs/BlogForm';
import useHttp from '../hooks/use-http';
import { addBlog } from '../lib/api';

const NewBlog = () => {
	const { sendRequest, status } = useHttp(addBlog);
	const history = useHistory();

	useEffect(() => {
		if (status === 'completed') {
			history.push('/blogs');
		}
	}, [status, history]);

	const addBlogHandler = (blogData: BlogData) => {
		sendRequest(blogData);
	};

	return (
		<BlogForm
			isLoading={status === 'pending'}
			onAddBlog={addBlogHandler}
		/>
	);
};

export default NewBlog;
