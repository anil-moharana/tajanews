import React from "react";
import Sidebar from "./Sidebar";
import NewsList from "./NewsList";
import NewsApi from "../api/NewsApi";
import NewsContent from "./NewsContent";

import "./Content.css";

class App extends React.Component {
  state = { NewsStack: [], SelectedNews: null };

  componentDidMount() {
    this.getNewsData("Technology");
  }

  getNewsData = async term => {
    const response = await NewsApi.get("/top-headlines", {
      params: {
        category: term,
        country: "in",
        apiKey: "Add your https://newsapi.org/ key for getting data"
      }
    });

    this.setState({
      NewsStack: response.data.articles,
      SelectedNews: response.data.articles[0]
    });
  };

  onNewsSelect = news => {
    this.setState({ SelectedNews: news });
  };

  render() {
    return (
      <div id="main">
        <div
          className="ui top fixed tiny menu"
          style={{ backgroundColor: "rgba(82, 162, 193, 0.99)" }}
        ></div>
        <div className="sidebar">
          <Sidebar onAnchorClickCallback={this.getNewsData} />
        </div>
        <div className="content-wrap">
          <div className="ui grid" style={{ backgroundColor: "#c4e1e6" }}>
            <div className="ui row">
              <div className="eleven wide column">
                <NewsContent SelectedNews={this.state.SelectedNews} />
              </div>
              <div className="five wide column " style={{ overflowY: "auto" }}>
                <NewsList
                  newslist={this.state.NewsStack}
                  onNewsSelectCallback={this.onNewsSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
