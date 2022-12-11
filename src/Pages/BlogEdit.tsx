import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { getSingleBlog } from '../lib/api';
import LoadingSpinner from '../Components/UI/LoadingSpinner';
import BlogEditor from '../Components/blogs/BlogEditor';

interface ParamTypes {
	blogId: string;
}

const BlogDetail = () => {
	const params = useParams<ParamTypes>();
	const blogId = params.blogId;

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
			/>
		</div>
	);
};

export default BlogDetail;
