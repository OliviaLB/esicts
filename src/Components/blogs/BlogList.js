import { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { deleteBlog, deleteBlogImage } from '../../lib/api';

import BlogItem from './BlogItem';
import classes from './BlogList.module.css';

const sortBlogs = (blogs, ascending) => {
	return blogs.sort((blogA, blogB) => {
		if (ascending) {
			return blogA.id > blogB.id ? 1 : -1;
		} else {
			return blogA.id < blogB.id ? 1 : -1;
		}
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

	const deletePosts = async (blogID, blogImageID) => {
		deleteBlogImage(blogImageID);
		deleteBlog(blogID);
		const result = sortedBlogs.filter((sortedBlog) => sortedBlog.id !== blogID);
		setBlogs(result);
	};

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>
					Sort {isSortingAscending ? 'Descending' : 'Ascending'}
				</button>
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
