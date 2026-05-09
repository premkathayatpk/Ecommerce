import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products.js";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found!</div>;
  }
  console.log(product);
  return (
    <div className=" mx-40 my-15 bg-white drop-shadow-lg rounded-xl">
      <div className="flex">
        <div>
          <img src={product.productImg} alt="Img" className="w-100 h-full" />
        </div>
        <div className="py-5 px-5">
          <h1 className="text-3xl font-semibold ">{product.name}</h1>
          <p className="line-through text-gray-500 text-xl ">
            Rs.{product.dis_price}
          </p>
          <p className="text-orange-600 text-xl">Rs.{product.price}</p>
          <p className=" text-xl">Quantity {product.qty}</p>
          <div className="flex gap-10">
            <button className="text-xl py-2 px-5 text-white bg-blue-400 ">
              Buy Now
            </button>
            <button className="text-xl py-2 px-5 text-white bg-orange-500 ">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
