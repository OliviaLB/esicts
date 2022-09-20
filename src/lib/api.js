import {
  getStorage,
  ref,
  list,
  getDownloadURL,
} from "firebase/storage";

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

export async function getSingleImage(blogId) {
  console.log(blogId);
  const storage = await getStorage();
  const listRef = await ref(storage, "banners/");
  const response = await list(listRef);

  const data = await response.items.forEach((item) => {
    getDownloadURL(item).then((url) => {
      var result = url;
      console.log(result);
    });
  });

  return data;
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
