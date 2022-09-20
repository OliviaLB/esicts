import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import BlogItem from "./BlogItem";
import classes from "./BlogList.module.css";

const sortBlogs = (blogs, ascending) => {
  return blogs.sort((blogA, blogB) => {
    if (ascending) {
      return blogA.id > blogB.id ? 1 : -1;
    } else {
      return blogA.id < blogB.id ? 1 : -1;
    }
  });
};

const BlogList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedBlogs = sortBlogs(props.blogs, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <div className="flexcontainer">
        {sortedBlogs.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            imageID={blog.imageID}
            text={blog.text}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default BlogList;
