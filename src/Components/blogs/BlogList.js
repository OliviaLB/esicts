import { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { deleteBlog, deleteBlogImage } from '../../lib/api';

import BlogItem from './BlogItem';
import classes from './BlogList.module.css';

const sortBlogs = (blogs, ascending) => {
	return blogs.sort((a, b) => {
		if (a.title < b.title) {
			return ascending ? -1 : 1;
		}
		if (a.title > b.title) {
			return ascending ? 1 : -1;
		}
		return 0;
	});
};

const BlogList = (props) => {
	const history = useHistory();
	const location = useLocation();
	const [blogs, setBlogs] = useState(props.blogs);

	const queryParams = new URLSearchParams(location.search);

	const isSortingAscending = queryParams.get('sort') === 'asc';

	const sortedBlogs = sortBlogs(blogs, isSortingAscending);

	const changeSortingHandler = () => {
		history.push({
			pathname: location.pathname,
			search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
		});
	};

	const alphabetSortingHandler = () => {
		const newSortOrder = isSortingAscending ? 'desc' : 'asc';
		const newSearch = `?sort=${newSortOrder}`;
		history.push({
			pathname: location.pathname,
			search: newSearch,
		});
		queryParams.set('sort', newSortOrder);
		location.search = queryParams.toString();
		window.location.reload();
	};

	const deletePosts = async (blogID, blogImageID) => {
		deleteBlogImage(blogImageID);
		deleteBlog(blogID);
		const result = sortedBlogs.filter((sortedBlog) => sortedBlog.id !== blogID);
		setBlogs(result);
	};

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Z-A' : 'A-Z'}</button>
			</div>
			<div className="flexcontainer">
				{sortedBlogs.map((blog) => (
					<BlogItem
						key={blog.id}
						id={blog.id}
						title={blog.title}
						description={blog.description}
						imageId={blog.imageId}
						html={blog.html}
						deletePosts={deletePosts}
					/>
				))}
			</div>
		</Fragment>
	);
};

export default BlogList;
