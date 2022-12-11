import { Link } from 'react-router-dom';
import { BlogData } from './Blog-Interfaces';
import classes from './HighlightedBlog.module.css';

const HighlightedBlog = (props: BlogData) => {
	console.log(props.html);

	return (
		<div className={classes.blogWrapper}>
			<Link
				to="/blogs"
				className={classes.returnLink}
			>
				<i className={`${classes.linkArrow} fa-sharp fa-solid fa-arrow-turn-down-left`}></i> Return
			</Link>
			<div className={classes.blogContent}>
				<h3>{props.title}</h3>
				<div dangerouslySetInnerHTML={{ __html: props.html }} />
			</div>
		</div>
	);
};

export default HighlightedBlog;
