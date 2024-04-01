import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import HighlightedBlog from '../Components/blogs/HighlightedBlog';
import useHttp from '../hooks/use-http';
import { getSingleBlog } from '../lib/api';
import LoadingSpinner from '../Components/UI/LoadingSpinner';

const BlogDetail = () => {
	const params = useParams();

	const { blogId } = params;

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
		<HighlightedBlog
			title={loadedBlog.title}
			imageId={loadedBlog.imageId}
			html={loadedBlog.html}
			description={loadedBlog.description}
			updatedDate={loadedBlog.updatedDate}
			createdDate={loadedBlog.createdDate}
		/>
	);
};

export default BlogDetail;
