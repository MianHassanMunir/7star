import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
export default function Pricing2child(props) {
  return (
    <>
      <div className=" text-center mt-5">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={props.data.src}
            alt=""
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {props.data.title}
          </h5>
          <h5 className=" text-blue-500 text-lg">{props.data.title2}</h5>
          <p className="text-gray-500 mt-6 w-[85%] lg:text-xl md:text-lg sm:text-lg text-md">
            {props.data.title3}
          </p>

          <div className="flex  text-gray-500 text-xl space-x-5 mt-7">
            <BsFacebook className="hover:text-blue-500" />
            <AiFillYoutube className="hover:text-blue-500" />
            <FaTiktok className="hover:text-blue-500" />
            <FaTelegramPlane className="hover:text-blue-500" />
          </div>
        </div>
      </div>
    </>
  );
}
