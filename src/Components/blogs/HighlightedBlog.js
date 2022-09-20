import { Link } from "react-router-dom";
import classes from "./HighlightedBlog.module.css";

const HighlightedBlog = (props) => {
  console.log(props.text);

  return (
    <div className={classes.blogWrapper}>
      <Link to="/blogs" className={classes.returnLink}>
        <i
          className={`${classes.linkArrow} fa-sharp fa-solid fa-arrow-turn-down-left`}
        ></i>{" "}
        Return
      </Link>
      <div class={classes.blogContent}>
        <h3>{props.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.text }} />
      </div>
    </div>
  );
};

export default HighlightedBlog;
