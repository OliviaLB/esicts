import { useEffect } from "react";
import { useParams } from "react-router-dom";

import HighlightedBlog from "../Components/blogs/HighlightedBlog";
import useHttp from "../hooks/use-http";
import { getSingleBlog } from "../lib/api";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

const BlogDetail = () => {
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
      <div className="wrappercol">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="wrappercol">{error}</p>;
  }

  if (!loadedBlog.text) {
    return (
      <div className="wrappercol">
        <h2>No blog found!</h2>
      </div>
    );
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
