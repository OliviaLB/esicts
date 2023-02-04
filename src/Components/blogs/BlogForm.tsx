import { Fragment, useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import swal from 'sweetalert';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './BlogForm.module.css';
import { addImage } from '../../lib/api';

const BlogForm = (props: any) => {
	const { quill, quillRef } = useQuill();
	const [isEntering, setIsEntering] = useState(false);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [encodedImage, setEncodedImage] = useState('');
	const [image, setImage] = useState('');
	const [html, setHtml] = useState();
	const [title, setTitle] = useState<string | undefined>();
	const [description, setDescription] = useState<string | undefined>();

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
					console.log(encodedImage);
					const base64result = encodedImage.split(',')[1];
					const attribute = encodedImage.split(',')[0];
					setImage(attribute);
					setEncodedImage(base64result);
				}
			};
		}
	};

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

	function submitFormHandler(event: React.SyntheticEvent) {
		event.preventDefault();
		const token = uuidv4();

		try {
			props.onAddBlog({
				title,
				description,
				html,
			});
		} catch (error) {
			console.error(error);
		}

		try {
			addImage(encodedImage, token);
			console.log('Image uploaded successfully');
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<Fragment>
			<Prompt
				when={isEntering}
				message={(location) =>
					'Are you sure you want to leave? All your entered data will be lost!'
				}
			/>

			<img
				src={`${image},${encodedImage}`}
				alt=""
			></img>
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
						<label htmlFor="title">Title</label>
						<input
							type="text"
							id="title"
							onChange={titleChangeHandler}
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
