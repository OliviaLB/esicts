import { getSingleBlog } from '../lib/api';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogEditor from '../Components/blogs/BlogEditor';
import LoadingSpinner from '../Components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';

const BlogEdit = () => {
	const params = useParams();
	const blogId = params.blogId;
	const current = new Date();

	const { sendRequest, status, data: loadedBlog, error } = useHttp(getSingleBlog, true);

	useEffect(() => {
		sendRequest(blogId);
	}, [sendRequest, blogId]);

	if (status === 'pending') {
		return (
			<div className="wrappercol">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="wrappercol">{error}</p>;
	}

	if (!loadedBlog.html) {
		return (
			<div className="wrappercol">
				<h2>No blog found!</h2>
			</div>
		);
	}

	return (
		<div className="wrappercol">
			<BlogEditor
				title={loadedBlog.title}
				imageId={loadedBlog.imageId}
				html={loadedBlog.html}
				description={loadedBlog.description}
				id={loadedBlog.id}
				createdDate={loadedBlog.createdDate}
				updatedDate={current}
			/>
		</div>
	);
};

export default BlogEdit;
