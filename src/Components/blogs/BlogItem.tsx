import { Link } from 'react-router-dom';
import classes from './BlogItem.module.css';
import { Blog } from './Blog-Interfaces';
import { useSelector } from 'react-redux';
import { getUserIsLoggedIn } from '../../lib/Authentication';
import { retrieveImage } from '../../lib/api';
import { useState } from 'react';

const BlogItem = (props: Blog) => {
	const blogID = props.id;
	const blogImageID = props.imageId;
	const attribute: string = 'data:image/png;base64,';
	const [image, setImage] = useState('');

	const fetchImageData = async () => {
		try {
			const imageData = await retrieveImage(props.imageId);
			const combinedURL = `${attribute}${imageData}`;
			setImage(combinedURL);
			return combinedURL;
		} catch (error) {
			console.error(error);
		}
	};

	const shorten = (str: string, maxLen: number, separator = ' ') => {
		if (str.length <= maxLen) return str;
		return str.substring(0, str.lastIndexOf(separator, maxLen)) + '...';
	};

	fetchImageData();
	return (
		<div className={`${classes.card} flex1x5 `}>
			<img
				className={classes.card__header}
				src={image}
				alt=""
			></img>

			<div className={classes.card__body}>
				<h3 className={classes.blog__name}>{props.title}</h3>
				<p className={classes.blog__desc}>{shorten(`${props.description}`, 150)}</p>
				<Link
					className={classes.btn}
					to={`/blogs/${props.id}`}
				>
					Read More <i className={`${classes.linkarrow} fa-sharp fa-solid fa-arrow-right`}></i>
				</Link>
			</div>
			{getUserIsLoggedIn() && (
				<div className={classes.editorTools}>
					<div className={classes.tooltip}>
						<span className={classes.tooltiptext}>Delete Post</span>

						<button onClick={() => props.deletePosts(blogID, blogImageID)}>
							<i className={`${classes.editorButton} fa-sharp fa-solid fa-trash`}></i>
						</button>
					</div>

					<div className={classes.tooltip}>
						<span className={classes.tooltiptext}>Edit Post</span>
						<Link
							className={classes.btn}
							to={`/blogedit/${props.id}`}
						>
							<i className={`${classes.editorButton} fa-sharp fa-solid fa-pen-to-square`}></i>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default BlogItem;
