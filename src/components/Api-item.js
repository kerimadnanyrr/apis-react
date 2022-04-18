import React from "react";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";

const ApiItem = ({ api,toggleBookmark }) => {
  return (
    <>
      {" "}
      <div className="api-item">
        <div className="api-icon">
          <img src={api.icon} alt="" />
        </div>
        <div className="item-detail">
          <h4>{api.name}</h4>
          <div className="category">{api.category}</div>
          <div className="description">{api.description}</div>
          <div className="item-hover">
            <button onClick={()=>toggleBookmark(api.id)} >
              <BsBookmark></BsBookmark>
              Bookmark
            </button>
            <a href={api.api_docs} target="_blank">
              API Docs
              <AiOutlineRight></AiOutlineRight>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiItem;
