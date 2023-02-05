import { Fragment, useState, useEffect } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './BlogForm.module.css';

import { retrieveImage, updateBlog, updateBlogImage } from '../../lib/api';
import { Blog, BlogData } from './Blog-Interfaces';

interface ParamTypes {
	blogId: string;
}

const BlogEditor = (props: Blog) => {
	const params = useParams<ParamTypes>();
	const blogId = params.blogId;
	const { quill, quillRef } = useQuill();
	const [isEntering, setIsEntering] = useState(false);
	const [imageId, setImageId] = useState(props.imageId);
	const [html, setHtml] = useState(props.html);
	const [title, setTitle] = useState(props.title);
	const [description, setDescription] = useState(props.description);

	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [image, setImage] = useState('');
	const [encodedImage, setEncodedImage] = useState('');
	const [clicked, setClicked] = useState(false);
	const [originalImage, setOriginalImage] = useState('');

	let history = useHistory();

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};
	const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(event.target.value);
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file) {
			setSelectedFile(file);
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				if (reader.result) {
					setImage(reader.result.toString());
					const encodedImage = reader.result.toString();
					const base64result = encodedImage.split(',')[1];
					const attribute = encodedImage.split(',')[0];
					setImage(attribute);
					setEncodedImage(base64result);
				}
			};
		}
	};

	const handleFileInputClick = () => {
		setClicked(true);
	};

	const setImageData = async () => {
		if (clicked === true) {
			return encodedImage;
		} else {
			const imageData = await retrieveImage(props.imageId);
			setOriginalImage(imageData);
			return originalImage;
		}
	};

	setImageData();

	const handlePostData = async () => {
		const imageData = await setImageData();

		try {
			const imageGUID = await updateBlogImage(imageData, props.imageId);
			console.log(imageData);

			const blogData: BlogData = {
				id: blogId,
				description,
				html,
				imageId,
				title,
			};

			updateBlog(blogData);
			swal('Blog updated!', 'Submission Success', 'success');
			history.push('/blogs');
		} catch (error) {
			swal('Oops', 'Something went wrong', 'Error');
		}
	};

	function submitFormHandler(event: React.SyntheticEvent) {
		event.preventDefault();
		handlePostData();
	}

	useEffect(() => {
		if (quill) {
			quill.on('text-change', () => {
				// Get innerHTML using quill
				setHtml(quill.root.innerHTML);
			});
		}
	}, [quill]);

	const finishEnteringHandler = () => {
		setIsEntering(false);
	};

	const formFocusedHandler = () => {
		setIsEntering(true);
	};

	return (
		<Fragment>
			<Prompt
				when={isEntering}
				message={(location) =>
					'Are you sure you want to leave? All your entered data will be lost!'
				}
			/>
			<Card>
				<form
					onFocus={formFocusedHandler}
					className={classes.form}
					onSubmit={submitFormHandler}
				>
					{props.isLoading?.() && (
						<div className={classes.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={classes.control}>
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							onChange={titleChangeHandler}
							value={title}
						/>
					</div>

					<div className={classes.control}>
						<label htmlFor="description">Description</label>
						<input
							type="text"
							id="description"
							onChange={descriptionChangeHandler}
							value={description}
						/>
					</div>

					<div className={classes.control}>
						<label htmlFor="image">Image Card</label>
						<input
							type="file"
							id="imageField"
							onChange={handleFileChange}
							onClick={handleFileInputClick}
						/>
					</div>

					<div className={classes.editor}>
						<div
							dangerouslySetInnerHTML={{ __html: typeof props.html }}
							className={classes.texteditor}
							ref={quillRef}
							id="text"
						/>
					</div>

					<div className={classes.actions}>
						<button
							onClick={finishEnteringHandler}
							className="btn"
						>
							Update Blog
						</button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default BlogEditor;
