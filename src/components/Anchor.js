import React from "react";

class Anchor extends React.Component {
  constructor(props) {
    super(props);
    this.anchorelm = React.createRef();
  }

  onAnchorClick = event => {
    event.preventDefault();
    this.props.onAnchorClickCallback(this.anchorelm.current.innerText);
  };

  render() {
    return (
      <a
        className="item"
        ref={this.anchorelm}
        href={this.props.href}
        onClick={this.onAnchorClick}
      >
        {this.props.text}
      </a>
    );
  }
}

export default Anchor;
