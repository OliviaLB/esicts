import { Fragment, useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import swal from 'sweetalert';
import { useNavigate, useParams } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './BlogForm.module.css';

import { retrieveImage, updateBlog, updateBlogImage } from '../../lib/api';
import { Blog } from './Blog-Interfaces';


const BlogEditor = (props: Blog) => {
	const params = useParams();
	const blogId = params.blogId;
	const { quill, quillRef } = useQuill();
	const [isEntering, setIsEntering] = useState(false);
	const [imageId] = useState(props.imageId);
	const [htmlContent, setHtmlContent] = useState(props.html);
	const [titleContent, setTitleContent] = useState(props.title);
	const [descriptionContent, setDescriptionContent] = useState(props.description);

	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [image, setImage] = useState('');
	const [encodedImage, setEncodedImage] = useState<string | null>(null);
	const currentDate = new Date();

	let history = useNavigate();

	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitleContent(event.target.value);
	};

	const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDescriptionContent(event.target.value);
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

	const handlePostData = async () => {
		try {
			await updateBlogImage(encodedImage, props.imageId);

			const blog: Blog = {
				id: blogId,
				description: descriptionContent,
				html: htmlContent,
				imageId,
				title: titleContent,
				createdDate: props.createdDate,
				updatedDate: currentDate,
			};

			await updateBlog(blog);
			swal({
				title: 'Success',
				text: 'Blog Updated',
				icon: 'success',
				dangerMode: false,
				buttons: {
					ok: 'OK',
				},
			} as any);
			await history('/home');
		} catch (error) {
			if (error instanceof Error) {
				let message = error.message;
				swal({
					title: 'Something went wrong',
					text: message,
					icon: 'error',
					dangerMode: true,
					buttons: {
						ok: 'OK',
					},
				} as any);
			}
		}
	};

	function handleSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		handlePostData();
	}

	useEffect(() => {
		const fetchData = async () => {
			if (quill) {
				quill.on('text-change', () => {
					// Get innerHTML using quill
					setHtmlContent(quill.root.innerHTML);
				});
			}
			const imageData = await retrieveImage(props.imageId);
			setEncodedImage(imageData);
		};

		fetchData();
	}, [quill, props.imageId]);

	const finishEnteringHandler = () => {
		setIsEntering(false);
	};

	const formFocusedHandler = () => {
		setIsEntering(true);
	};

	return (
		<Fragment>
			<Card>
				<form
					onFocus={formFocusedHandler}
					className={classes.form}
					onSubmit={handleSubmit}
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
							onChange={handleTitleChange}
							value={titleContent}
						/>
					</div>

					<div className={classes.control}>
						<label htmlFor="description">Description</label>
						<input
							type="text"
							id="description"
							onChange={handleDescriptionChange}
							value={descriptionContent}
						/>
					</div>

					<div className={classes.control}>
						<label htmlFor="image">
							Update Card Image (Leave Blank if you wish to keep original image)
						</label>
						<input
							type="file"
							id="imageField"
							onChange={handleFileChange}
						/>
					</div>

					<div className={classes.editor}>
						<div
							dangerouslySetInnerHTML={{ __html: props.html !== undefined ? props.html : '' }}
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
