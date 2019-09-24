import React from "react";

const NewsContent = props => {
  if (!props.SelectedNews) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ margin: "20px", position: "fixed", width: "750px" }}>
      <a className="ui teal label">
        Source Site: {props.SelectedNews.source.name}
      </a>
      <h5 className="ui header">{props.SelectedNews.title}</h5>
      <div className="content">
        <img
          className="ui big image"
          alt="No snam found"
          src={props.SelectedNews.urlToImage}
          style={{ paddingBottom: "15px" }}
        />
        <div className="description">
          <p>{props.SelectedNews.content}</p>
          <a className="ui teal tag label">
            Author: {props.SelectedNews.author}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
