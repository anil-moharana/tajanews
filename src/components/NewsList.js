import React from "react";
import NewsItem from "./NewsItem";

const NewsList = props => {
  const renderedList = props.newslist.map(news => {
    return (
      <NewsItem news={news} onNewsSelectCallback={props.onNewsSelectCallback} />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default NewsList;
