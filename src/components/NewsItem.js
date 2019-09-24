import React from "react";

const NewsItem = ({ news, onNewsSelectCallback }) => {
  return (
    <div onClick={() => onNewsSelectCallback(news)} className="news-item item">
      <div className="column">
        <div className="ui segment " style={{ cursor: "pointer" }}>
          <img
            className="ui image"
            alt="snap not found"
            src={news.urlToImage}
          />
          <div className="content">{news.title}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
