import { Fragment, useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./BlogForm.module.css";

import { updateBlog } from "../../lib/api";

const BlogEditor = (props) => {
  const params = useParams();
  const blogId = params.blogId;
  const { quill, quillRef } = useQuill();
  const [isEntering, setIsEntering] = useState(false);
  const [html, setHtml] = useState(props.html);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const blogData = {
      id: blogId,
      title,
      description,
      html,
    };

    console.log(blogData);
    updateBlog(blogData);

    swal("Blog updated!", "Submission Success", "success");
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

          <div className={classes.editor}>
            <div
              dangerouslySetInnerHTML={{ __html: props.html }}
              className={classes.texteditor}
              ref={quillRef}
              id="text"
            />
          </div>

          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Update Blog
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BlogEditor;
