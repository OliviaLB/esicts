import axios, { AxiosRequestConfig } from "axios";
import { Blog } from "../Components/blogs/Blog";

const headers: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  responseType: "json",
};

const getApiBaseAddress = (): string => {
  let result = window.location.origin;

  if (result.includes("localhost")) {
    result = "http://www.ultimatesoftwaresolutions.com"; // http://localhost:3000/
  }

  return result; // + '/api/';
};

const client = axios.create({
  baseURL: getApiBaseAddress(),
  headers: { Accept: "application/json" },
});

export async function getAllBlogs() {
  const Blogs: any = await client.get("/blogs/Blog/getBlogs");
  const transformedBlogs: [] = Blogs.data;
  return transformedBlogs;
}

export async function getSingleBlog(blogId: string) {
  const Blogs: Blog[] = await getAllBlogs();
  const result = Blogs.find((blog) => {
    return blog.id === blogId;
  });

  const loadedBlog = {
    id: blogId,
    ...result,
  };

  console.log(loadedBlog);
  return loadedBlog;
}

export async function addBlog(blogData: Blog) {
  blogData.imageId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  client
    .post("/Blogs/Blog/UpdateBlog", blogData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function updateBlog(blogData: Blog) {
  blogData.imageId = "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  client
    .post("/Blogs/Blog/UpdateBlog", blogData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function deleteBlog(blogId: string) {
  const blogURL = "/Blogs/Blog/DeleteBlog?blogId=";
  const blogEntry: string = blogURL + blogId;

  console.log(blogEntry);
  const deleteBlog = await client
    .delete(blogEntry)
    .then((response) => {
      console.log(response);
    });
  console.log(deleteBlog);
}
