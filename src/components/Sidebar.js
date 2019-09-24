import React from "react";
import Header from "./Header";
import Anchor from "./Anchor";

class Sidebar extends React.Component {
  onAnchorClickCallback = term => {
    this.props.onAnchorClickCallback(term);
  };

  render() {
    return (
      <div
        className="ui sidebar visible inverted vertical menu"
        style={{ backgroundColor: "rgba(82, 162, 193, 0.99)" }}
      >
        <Header />
        <Anchor
          text="Technology"
          onAnchorClickCallback={this.onAnchorClickCallback}
        />
        <Anchor
          text="Science"
          onAnchorClickCallback={this.onAnchorClickCallback}
        />
        <Anchor
          text="Health"
          onAnchorClickCallback={this.onAnchorClickCallback}
        />
      </div>
    );
  }
}

export default Sidebar;
