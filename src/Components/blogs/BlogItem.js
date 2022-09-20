import { Link } from "react-router-dom";
import { getSingleImage } from "../../lib/api";

import classes from "./BlogItem.module.css";

const BlogItem = (props) => {
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
    </div>
  );
};

export default BlogItem;
