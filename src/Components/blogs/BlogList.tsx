import { Fragment, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { deleteBlog } from "../../lib/api";
import { Blog } from "./Blog";

import BlogItem from "./BlogItem";
import classes from "./BlogList.module.css";

const sortBlogs = (blogs: any, ascending: any) => {
  return blogs.sort((blogA: any, blogB: any) => {
    if (ascending) {
      return blogA.id > blogB.id ? 1 : -1;
    } else {
      return blogA.id < blogB.id ? 1 : -1;
    }
  });
};

const BlogList = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const [blogs, setBlogs] = useState(props.blogs);

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedBlogs = sortBlogs(blogs, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  const deletePosts = async (blogID: string) => {
    deleteBlog(blogID);
    const result = sortedBlogs.filter(
      (sortedBlog: Blog) => sortedBlog.id !== blogID
    );
    setBlogs(result);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <div className="flexcontainer">
        {sortedBlogs.map((blog: Blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            imageId={blog.imageId}
            html={blog.html}
            deletePosts={deletePosts}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default BlogList;
