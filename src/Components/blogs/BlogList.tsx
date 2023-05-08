import { Fragment, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { deleteBlog, deleteBlogImage } from '../../lib/api';
import { Blog } from './Blog-Interfaces';

import BlogItem from './BlogItem';
import classes from './BlogList.module.css';

const sortBlogs = (blogs: Blog[], key: string, ascending: boolean): Blog[] => {
	return blogs.sort((a, b) => {
		if (key === 'title') {
			if (a.title < b.title) {
				return ascending ? -1 : 1;
			}
			if (a.title > b.title) {
				return ascending ? 1 : -1;
			}
		} else if (key === 'createdDate') {
			if (a.createdDate && b.createdDate) {
				if (a.createdDate < b.createdDate) {
					return ascending ? -1 : 1;
				}
				if (a.createdDate > b.createdDate) {
					return ascending ? 1 : -1;
				}
			}
		}
		return 0;
	});
};

const BlogList: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
	const history = useHistory();
	const location = useLocation();
	const [sortedBlogs, setSortedBlogs] = useState<Blog[]>(blogs);

	const queryParams = new URLSearchParams(location.search);

	const sortKey = queryParams.get('sort') || 'title';
	const isSortingAscending = queryParams.get('order') === 'asc';

	const newSortedBlogs = sortBlogs(sortedBlogs, sortKey, isSortingAscending);

	const changeSortingHandler = (key: string) => {
		const order = sortKey === key && isSortingAscending ? 'desc' : 'asc';
		history.push({
			pathname: location.pathname,
			search: `?sort=${key}&order=${order}`,
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
				<button onClick={() => changeSortingHandler('title')}>
					Sort by {sortKey === 'title' ? (isSortingAscending ? 'Z-A' : 'A-Z') : 'Title'}
				</button>
				<button onClick={() => changeSortingHandler('createdDate')}>
					Sort by{' '}
					{sortKey === 'createdDate' ? (isSortingAscending ? 'Show Newest First' : 'Show Oldest First') : 'Created Date'}
				</button>
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
						createdDate={blog.createdDate}
					/>
				))}
			</div>
		</Fragment>
	);
};

export default BlogList;
