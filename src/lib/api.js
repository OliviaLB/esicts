import {
  getDatabase,
  ref,
  child,
  get,
  remove,
} from "firebase/database";

// init services

const FIREBASE_DOMAIN =
  "https://esic-d92c3-default-rtdb.europe-west1.firebasedatabase.app/";

export async function getAllBlogs() {
  const response = await fetch(`${FIREBASE_DOMAIN}/blogs.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch blogs.");
  }

  const transformedBlogs = [];

  for (const key in data) {
    const blogObj = {
      id: key,
      ...data[key],
    };

    transformedBlogs.push(blogObj);
  }

  return transformedBlogs;
}

export async function getSingleBlog(blogId) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/blogs/${blogId}.json`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch blog.");
  }

  const loadedBlog = {
    id: blogId,
    ...data,
  };

  return loadedBlog;
}

export async function addBlog(blogData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/blogs.json`, {
    method: "POST",
    body: JSON.stringify(blogData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create blog.");
  }

  return null;
}

export async function handleDelete(blogID) {
  const dbRef = ref(getDatabase());
  const getBlog = await get(child(dbRef, `blogs/${blogID}`));
  await getBlog.remove;
}

export async function addComment(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestData.blogId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(blogId) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${blogId}.json`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
