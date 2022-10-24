import { Fragment, useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import uuid from "react-uuid";
import swal from "sweetalert";

import storage from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./BlogForm.module.css";
import { Blog } from "./Blog";

const BlogForm = (props) => {
  const { quill, quillRef } = useQuill();
  const [isEntering, setIsEntering] = useState(false);
  const [image, setImage] = useState(null);
  const [html, setHtml] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const imageId = image["name"] + uuid();

    // optional: Could validate here

    props.onAddBlog({
      title,
      description,
      html,
      imageId,
    });

    const imageRef = ref(storage, `banners/${imageId}`);
    uploadBytes(imageRef, image);
    swal("blog Sent!", "Submission Success", "success");
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
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
          "Are you sure you want to leave? All your entered data will be lost!"
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
            <label htmlFor="description">Image Card</label>
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
            <button onClick={finishEnteringHandler} className="btn">
              Add Blog
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BlogForm;
