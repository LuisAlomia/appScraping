import React from "react";
import { useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const { search } = useParams();

  return (
    <div className="mx-10 my-5 text-lg breadcrumbs">
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>{search}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
