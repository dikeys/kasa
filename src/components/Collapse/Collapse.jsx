import React from "react";

const Collapse = ({title, description}) => {
  return (
    <div>
      <details className="">
        <summary>{title}</summary>
        <p>{description}</p>
      </details>
    </div>
  );
};

export default Collapse;
