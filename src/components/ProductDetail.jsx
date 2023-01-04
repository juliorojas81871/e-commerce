import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetail = () => {
  return (
    <div className="m-3/5 m-auto">
      <div className="flex items-center my-10 space-x-10">
        <div className="product-img h-[500px] w-[500px]">
          <img
            src="images/products/cap.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="product-detail w-1/2 space-y-10">
          <h1 className="text-4xl font-bold">Black Worthy Hat</h1>
          <h2 className="text-xl font-semibold">$38</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            dolorem placeat reprehenderit explicabo aut fugit ipsum dolores ad,
            veritatis exercitationem.
          </p>
          <div className="stars flex space-x-2">
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiFillStar />
            </div>
            <div>
              <AiOutlineStar />
            </div>
            <div>
              <AiOutlineStar />
            </div>
          </div>
          <input type="Number" id="amount" className="outline-0 w-16 px-2 border-2 border-gray-800"/>
          <div className="btns space-x-5">
            <button className="bg-stone-800 text-white px-5 py-2">Add To Cart</button>
            <button className="border botder-stone-800 px-5 py-2">Add To Favorite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
