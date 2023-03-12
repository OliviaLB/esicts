import { Fragment, useState, useEffect } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import swal from 'sweetalert';
import { useParams } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './BlogForm.module.css';

import { updateBlog, updateBlogImage } from '../../lib/api';
import { BlogData } from './Blog-Interfaces';

interface ParamTypes {
	blogId: string;
}

const BlogEditor = (props: any) => {
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
	const [encodedImage, setEncodedImage] = useState<string | null>(null);

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

	const handlePostData = async () => {
		try {
			await updateBlogImage(encodedImage, props.imageId);

			const blogData: BlogData = {
				id: blogId,
				description,
				html,
				imageId,
				title,
			};

			updateBlog(blogData);
			swal({
				title: 'Success',
				text: 'Blog Updated',
				icon: 'success',
				dangerMode: false,
				buttons: {
					ok: 'OK',
				},
			} as any);
			history.push('/blogs');
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
							dangerouslySetInnerHTML={{ __html: props.html }}
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
