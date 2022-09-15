import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import classes from "./BlogWriter.module.css";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

import storage from "../../firebase";
import {ref, uploadBytes} from "firebase/storage"

const BlogWriter = (props: any) => {
  const { quill, quillRef } = useQuill();
  const [html, setValue] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [imageUpload, setImageUpload] = useState(null);

  const titleChangeHandler = (event: any) => {
    setTitle(event.target.value);
  };
  const descChangeHandler = (event: any) => {
    setDesc(event.target.value);
  };

  const imageChangeHandler = (event: any) => {
    setImageUpload(event.target.files[0])
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        console.log(quillRef.current.firstChild.innerHTML);
        setValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef]);

  
function submitHandler(event: any) {
  event.preventDefault();
  if (imageUpload == null) return;

  const ImageID = imageUpload['name'] + uuid();

  console.log(ImageID)

  const imageRef = ref(storage, `banners/${ImageID}`);
  uploadBytes(imageRef, imageUpload).then(() => {
    alert("Image Uploaded")
  })

    const blog = {
      id: uuid(),
      title,
      desc,
      ImageID,
      html,
    };

    fetch(
      "https://esic-d92c3-default-rtdb.europe-west1.firebasedatabase.app/Blogs.json",
      {
        method: "POST",
        body: JSON.stringify(blog),
      }
    );
  }

  return (<>
      <h2>Write a blog</h2>
      <form className={classes.form}>
        <label htmlFor="title">Blog Title: </label>
        <input
          type="text"
          id="title"
          className={classes.title}
          onChange={titleChangeHandler}
        />

        <label htmlFor="desc">Blog Description:</label>
        <textarea
          form="contactform"
          id="desc"
          onChange={descChangeHandler}
        ></textarea>

        <label htmlFor="image">Blog Card Image:</label>
        <input type="file" onChange={imageChangeHandler}/>

        <div className={classes.blogcontainer}>
          <div className={classes.editor}>
            <div ref={quillRef} />
          </div>
        </div>
        <div>
          <button className={classes.formbtn} onClick={submitHandler}>
            Save
          </button>
          <button className={classes.formbtn}>Publish</button>
        </div>
      </form>
    </>
  );
};

export default BlogWriter;
