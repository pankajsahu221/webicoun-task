import React from "react";
import "../Styles/Blogs.css";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

function Blogs({ contents }) {
  const history = useHistory();

  return (
    <div className="contents__blog__cont">
      <div className="contents__blog">
        {/* We can add links to refer to the perticular blog page */}
        {contents.map(item => {
          return (
            <div
              className="contents__blog__item"
              key={uuidv4()}
              onClick={() => history.push(`/blogdata/${item?._id}`)}
            >
              <img
                className="image"
                src={item?.image}
                // alternative image
                onError={e => (
                  (e.target.onerror = null),
                  (e.target.src =
                    "https://semantic-ui.com/images/wireframe/image.png")
                )}
                alt="blogphoto"
              />

              <div className="details">
                <h3>{item?.title}</h3>
                <p className="readfs">Read full story</p>
                <p className="author">{item?.author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;
