import React, { useState, useEffect } from "react";
import "../Styles/BlogData.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function BlogData({ match }) {
  const [BlogData, setBlogData] = useState([]);

  const blogId = match.params.id;

  useEffect(() => {
    axios
      .get(
        `https://webicoun-backend-hajkn.run-ap-south1.goorm.io/blogs/${blogId}`
      )
      .then(response => {
        // handle success
        console.log("Blogdata -> ", response.data.blog[0]);
        setBlogData(response.data.blog[0]);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="blogdata__cont">
      <div className="blogdata">
        <h2 className="blogdata__title">{BlogData?.title}</h2>
        <img
          src={BlogData?.image}
          // alternative image
          onError={e => (
            (e.target.onerror = null),
            (e.target.src =
              "https://semantic-ui.com/images/wireframe/image.png")
          )}
        />
        <h4 className="blogdata__author">{BlogData.author}</h4>

        <div
          dangerouslySetInnerHTML={{
            __html: BlogData?.description
          }}
          className="blogdata__desc"
        ></div>

        {/* Tags */}
        <div className="blogdata__tags__cont">
          <h2>Related Tags</h2>
          <div className="blogdata__tags">
            {BlogData?.tags?.map(tag => {
              return (
                <p className="tag" key={uuidv4()}>
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogData;
