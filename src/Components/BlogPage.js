import React, { useState, useEffect } from "react";
import "../Styles/BlogPage.css";
import Blogs from "./Blogs";
import ImgTags from "./ImgTags";
import data from "../data.json";
import axios from "axios";

function BlogPage() {
  const [contents, setContents] = useState([]);
  const [imgTag, setImgTag] = useState([]);

  useEffect(() => {
    axios
      .get("https://webicoun-backend-hajkn.run-ap-south1.goorm.io/blogcat")
      .then(response => {
        // handle success
        console.log("Blogs -> ", response);
        setContents(response.data.blogs);
        setImgTag(response.data.blogcat);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="blogpage__title">The Webicoun Blog</h1>

      {/* Tags */}
      <ImgTags imgTag={imgTag} />

      {/* list of blogs */}
      <Blogs contents={contents} />
    </div>
  );
}

export default BlogPage;
