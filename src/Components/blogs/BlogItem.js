import { Link } from "react-router-dom";
import classes from "./BlogItem.module.css";

const BlogItem = (props) => {
  const blogID = props.id;

  return (
    <div className={`${classes.card} flex1x5 `}>
      <img
        className={classes.card__header}
        src="https://source.unsplash.com/random"
        alt=""
      ></img>

      <div className={classes.card__body}>
        <h3 className={classes.blog__name}>{props.title}</h3>
        <p className={classes.blog__desc}>{props.description}</p>
        <Link className={classes.btn} to={`/blogs/${props.id}`}>
          Read More{" "}
          <i
            className={`${classes.linkarrow} fa-sharp fa-solid fa-arrow-right`}
          ></i>
        </Link>
      </div>
      <div className={classes.editorTools}>
        <div className={classes.tooltip}>
          <span className={classes.tooltiptext}>Delete Post</span>

          <button onClick={() => props.deletePosts(blogID)}>
            <i
              className={`${classes.editorButton} fa-sharp fa-solid fa-trash`}
            ></i>
          </button>
        </div>

        <div className={classes.tooltip}>
          <span className={classes.tooltiptext}>Edit Post</span>
          <Link className={classes.btn} to={`/blogedit/${props.id}`}>
            <i
              className={`${classes.editorButton} fa-sharp fa-solid fa-pen-to-square`}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
