import React from "react";

const Header = (props) => {
  return (
    <div className={props.headerStyle}>
      <h1>{props.label}</h1>
    </div>
  )
}

export default Header;