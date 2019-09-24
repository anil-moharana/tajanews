import React from "react";
import SubHeader from "./SubHeader";

const Header = props => {
  return (
    <h2 className="ui center aligned icon header">
      <i className="newspaper icon" style={{ color: "white" }}></i>
      <SubHeader clr="white" text="TAJANEWS" />
    </h2>
  );
};

export default Header;
