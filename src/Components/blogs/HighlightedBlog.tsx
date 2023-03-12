import { Link } from 'react-router-dom';
import classes from './HighlightedBlog.module.css';

const HighlightedBlog = (props: any) => {
	console.log(props.imageId);
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
				<h4>Description: {props.description}</h4>
				<div dangerouslySetInnerHTML={{ __html: props.html }} />
			</div>
		</div>
	);
};

export default HighlightedBlog;
