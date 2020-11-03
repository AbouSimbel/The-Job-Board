import React from "react";

const Job = (props) => {
  return (
    <div className={props.style}>
      <h2>{props.title}</h2>
      <div>
      <span>{props.contractType}</span>-  <span>{props.city}</span>-  <span>{props.country}</span>
      </div>
    </div>
  )
}

export default Job;
