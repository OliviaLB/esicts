import { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { deleteBlog, deleteBlogImage } from '../../lib/api';
import { Blog } from './Blog-Interfaces';

import BlogItem from './BlogItem';
import classes from './BlogList.module.css';

const sortBlogs = (blogs: Blog[], ascending: boolean): Blog[] => {
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

const BlogList: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
	const history = useHistory();
	const location = useLocation();
	const [sortedBlogs, setSortedBlogs] = useState<Blog[]>(blogs);

	const queryParams = new URLSearchParams(location.search);

	const isSortingAscending = queryParams.get('sort') === 'asc';

	const newSortedBlogs = sortBlogs(sortedBlogs, isSortingAscending);

	const changeSortingHandler = () => {
		history.push({
			pathname: location.pathname,
			search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
		});
	};

	const deletePosts = async (blogID: string, blogImageID: string) => {
		await deleteBlogImage(blogImageID);
		await deleteBlog(blogID);
		const result = newSortedBlogs.filter((sortedBlog) => sortedBlog.id !== blogID);
		setSortedBlogs(result);
	};

	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Z-A' : 'A-Z'}</button>
			</div>
			<div className="flexcontainer">
				{newSortedBlogs.map((blog) => (
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
