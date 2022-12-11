import { useEffect } from 'react';

import BlogList from '../Components/blogs/BlogList';
import NoBlogsFound from '../Components/blogs/NoBlogsFound';
import LoadingSpinner from '../Components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllBlogs } from '../lib/api';

const AllBlogs = () => {
	const { sendRequest, status, data: loadedBlogs, error } = useHttp(getAllBlogs, true);

	useEffect(() => {
		sendRequest();
	}, [sendRequest]);

	if (status === 'pending') {
		return (
			<div className="wrappercol">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (status === 'completed' && (!loadedBlogs || loadedBlogs.length === 0)) {
		return <NoBlogsFound />;
	}

	return <BlogList blogs={loadedBlogs} />;
};

export default AllBlogs;
