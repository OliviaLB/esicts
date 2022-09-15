import BlogPost from "./BlogPost";
import { useEffect, useState } from "react";
import  Blog from "./Blog"

import { ref, listAll, getDownloadURL } from "firebase/storage";
import storage from "../../firebase";

interface BlogImage {
  name: string;
  url: string;
}

const BlogsList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [images, setImages] = useState<BlogImage[]>([]);
  const imagesRef = ref(storage, "banners/")

  useEffect(() => {
    listAll(imagesRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImages((prev: any) => [...prev, url])
        })
      })
    })
  }, []);

  useEffect(() => {


    const fetchBlogs = async () => {
      const response = await fetch(
        "https://esic-d92c3-default-rtdb.europe-west1.firebasedatabase.app/Blogs.json"
      );
      const responseData = await response.json();
      const loadedBlogs:Blog[] = [];
        
      for (const key in responseData) {
        loadedBlogs.push({
          id: key,
          title: responseData[key].title,
          desc: responseData[key].desc,
          ImageID: responseData[key].image,
        });
      }
      setBlogs(loadedBlogs);
    };
    fetchBlogs();
  });

  return (
    <div className="flexcontainer">
{images.map((url: any) => {
  return <img style={{
    width: `20%`
  }} src ={url}/>
})}

      {blogs.map((blog) => (
        <BlogPost     
          key={blog.id}
          image={blog.ImageID}
          title={blog.title}
          desc={blog.desc}
        />
      ))}
    </div>
  );
};

export default BlogsList;
