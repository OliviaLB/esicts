import { Link } from 'react-router-dom';
import classes from './HighlightedBlog.module.css';
import { Blog } from './Blog-Interfaces';
import { useState, useEffect } from 'react';

const HighlightedBlog = (props: Blog) => {
	const [formattedDate, setFormattedDate] = useState('');
	const [formattedWritten, setWrittenDate] = useState('');
	const [date] = useState(props.updatedDate);
	const [written] = useState(props.createdDate);

	useEffect(() => {
		const currentdate = new Date(date ?? new Date());
		const formatted = currentdate.toLocaleDateString('en-GB');
		setFormattedDate(formatted);
		const priordate = new Date(written ?? new Date());
		const priorformat = priordate.toLocaleDateString('en-GB');
		setWrittenDate(priorformat);
	}, [date]);

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
				<p>Date Created: {formattedWritten}</p>

				<p>Last Updated: {formattedDate}</p>
				<p>Description: {props.description}</p>

				<div dangerouslySetInnerHTML={{ __html: props.html ?? '' }} />
			</div>
		</div>
	);
};

export default HighlightedBlog;
