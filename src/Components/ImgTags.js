import React from "react";
import "../Styles/ImgTags.css";
import { v4 as uuidv4 } from "uuid";

function ImgTags({ imgTag }) {
  const imgTags = imgTag;

  return (
    <div className="blogpage__cont">
      <div className="blogpage">
        <ul className="img__tags">
          {imgTags.map(item => {
            return (
              <li className="img__tags__item" key={uuidv4()}>
                <img
                  className="img__tags__img"
                  src={item?.link}
                  alt="tag-img"
                />
                <p>{item?.category}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ImgTags;
