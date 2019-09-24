import React from "react";

const SubHeader = props => {
  return (
    <div className="sub header" style={{ color: props.clr }}>
      {props.text}
    </div>
  );
};

export default SubHeader;
