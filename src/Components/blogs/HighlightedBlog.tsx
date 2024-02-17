import { Blog } from './Blog-Interfaces';
import { Link } from 'react-router-dom';
import classes from './HighlightedBlog.module.css';

const HighlightedBlog = (props: Blog) => {

	return (
		<div className={classes.blogWrapper}>
			<Link
				to="/blogs"
				className={classes.returnLink}
			>
				<i className={`${classes.linkArrow} fa-sharp fa-solid fa-arrow-turn-down-left`}></i> Return
				to Blogs
			</Link>
			<div className={classes.blogContent}>
				<h3>{props.title}</h3>
				
				<p>Description: {props.description}</p>

				<div dangerouslySetInnerHTML={{ __html: props.html ?? '' }} />
			</div>
		</div>
	);
};

export default HighlightedBlog;
