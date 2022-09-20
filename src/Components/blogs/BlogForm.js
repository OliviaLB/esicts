import { Fragment, useRef, useState, useEffect } from "react";
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

const BlogForm = (props) => {
  const { quill, quillRef } = useQuill();
  const [isEntering, setIsEntering] = useState(false);
  const [image, setImage] = useState(null);
  const [html, setHtml] = useState();

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const imageChangeHandler = (event) => {
    setImage(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const imageID = image["name"] + uuid();

    // optional: Could validate here

    props.onAddBlog({
      title: enteredTitle,
      description: enteredDescription,
      text: html,
      imageID,
    });

    const imageRef = ref(storage, `banners/${imageID}`);
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
            <input type="text" id="title" ref={titleInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              ref={descriptionInputRef}
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
