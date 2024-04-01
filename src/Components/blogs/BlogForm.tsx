import { Fragment, useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './BlogForm.module.css';
import style from './HighlightedBlog.module.css';

import { addImage } from '../../lib/api';
import swal from 'sweetalert';

const BlogForm = (props: any) => {
	const { quill, quillRef } = useQuill();
	const [isEntering, setIsEntering] = useState(false);
	const [encodedImage, setEncodedImage] = useState('');
	const [html, setHtml] = useState('');
	const [title, setTitle] = useState<string>('');
	const [charCount, setCharCount] = useState(32);
	const [description, setDescription] = useState<string>('');
	const current = new Date();

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newTitle = event.target.value;
		setTitle(newTitle);
		setCharCount(32 - newTitle.length);
	};
	const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(event.target.value);
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files && event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				if (reader.result) {
					const encodedImage = reader.result.toString();
					const base64result = encodedImage.split(',')[1];
					setEncodedImage(base64result);
				}
			};
		}
	};

	useEffect(() => {
		if (quill) {
			quill.on('text-change', () => {
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

	const handlePostData = async () => {
		try {
			const token = '00000000-0000-0000-0000-000000000000';
			const imageGUID = await addImage(encodedImage, token);

			await props.onAddBlog({
				id: token,
				description,
				html,
				imageId: imageGUID,
				title,
				createdDate: current,
				updatedDate: current,
			});
			swal({
				title: 'Success',
				text: 'Blog Posted',
				icon: 'success',
				dangerMode: false,
				buttons: {
					ok: 'OK',
				},
			} as any);
		} catch (error) {
			console.error(error);
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

	function submitFormHandler(event: React.SyntheticEvent) {
		event.preventDefault();
		handlePostData();
	}

	return (
		<Fragment>
			<div className="wrappercol">
				<h2>Preview</h2>
				<div className={style.blogContent}>
					<h3 dangerouslySetInnerHTML={{ __html: title }} />
					<h4 dangerouslySetInnerHTML={{ __html: description }} />
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</div>
			</div>

			<Card>
				<form
					onFocus={formFocusedHandler}
					className={classes.form}
					onSubmit={submitFormHandler}
				>
					{props.isLoading && (
						<div className={classes.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={classes.control}>
						<label htmlFor="title">Title - {charCount} characters left</label>
						<input
							type="text"
							id="title"
							onChange={titleChangeHandler}
							maxLength={32}
						/>
					</div>

					<div className={classes.control}>
						<label htmlFor="description">Description</label>
						<input
							type="text"
							id="description"
							onChange={descriptionChangeHandler}
						/>
					</div>

					<div className={classes.control}>
						<label htmlFor="image">Image Card</label>
						<input
							type="file"
							id="image"
							onChange={handleFileChange}
						/>
					</div>

					<div className={classes.editor}>
						<div
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
							Add Blog
						</button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default BlogForm;
