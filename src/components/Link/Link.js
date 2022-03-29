import React from "react";

const LInk = (props) => {
  const { name, Link } = props.route;
  return (
    <li className="mr-12 ">
      <a href={Link}> {name}</a>
    </li>
  );
};

export default LInk;
