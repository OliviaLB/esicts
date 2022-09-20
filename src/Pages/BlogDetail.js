import { useEffect } from "react";
import {
  useParams,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import HighlightedBlog from "../Components/blogs/HighlightedBlog";
import Comments from "../Components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleBlog } from "../lib/api";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

const BlogDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { blogId } = params;

  const {
    sendRequest,
    status,
    data: loadedBlog,
    error,
  } = useHttp(getSingleBlog, true);

  useEffect(() => {
    sendRequest(blogId);
  }, [sendRequest, blogId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedBlog.text) {
    return <p>No blog found!</p>;
  }

  return (
    <div className="wrappercol">
      <HighlightedBlog
        title={loadedBlog.title}
        imageID={loadedBlog.imageID}
        text={loadedBlog.text}
        description={loadedBlog.description}
      />
    </div>
  );
};

export default BlogDetail;
