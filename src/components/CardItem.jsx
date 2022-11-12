import React from "react";
import image from "../assets/product.webp";

const CardItem = ({ product }) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="image of product" />
      </figure>
      <div className="card-body">
        <a href={product.link} target="_blank">
          <h2 className="card-title hover:text-slate-600">{product.name}</h2>
        </a>
        <p>$ {product.price}</p>
        <div className="card-actions justify-end ">
          <a
            className="badge badge-outline hover:badge  "
            href={product.link}
            target="_blank"
          >
            Ver producto
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
