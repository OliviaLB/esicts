import { Fragment, useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import uuid from 'react-uuid';
import swal from 'sweetalert';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './BlogForm.module.css';
import { addImage } from '../../lib/api';

const BlogForm = (props: any) => {
	const { quill, quillRef } = useQuill();
	const [isEntering, setIsEntering] = useState(false);
	const [image, setImage] = useState<File | null>(null);
	const [html, setHtml] = useState();
	const [title, setTitle] = useState<string | undefined>();
	const [description, setDescription] = useState<string | undefined>();

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};
	const descriptionChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(event.target.value);
	};

	const imageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return;
		setImage(event.target.files[0]);
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

		addImage(image);

		props.onAddBlog({
			title,
			description,
			html,
		});
	}

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
							onChange={imageChangeHandler}
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
