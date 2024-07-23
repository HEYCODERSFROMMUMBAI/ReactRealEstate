// import React from "react";
import QhseImgOne from "../assets/images/qhse_1.jpg";
import QhseImgTwo from "../assets/images/qhse_5.jpg";
import QhseImgThree from "../assets/images/qhse_3.jpeg";

const Services = () => {
  return (
    <div name="services" className="w-full bg-body_color py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Images */}
          <div className="relative aspect-w-1 aspect-h-1">
            <img
              src={QhseImgOne}
              className="object-cover rounded-lg shadow-lg"
              alt=""
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <img
              src={QhseImgTwo}
              className="object-cover rounded-lg shadow-lg"
              alt=""
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <img
              src={QhseImgTwo}
              className="object-cover rounded-lg shadow-lg"
              alt=""
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <img
              src={QhseImgThree}
              className="object-cover rounded-lg shadow-lg"
              alt=""
            />
          </div>

          {/* About Our Services */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4 border-setBorder px-4 py-6 border-secondry_color flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold font-title_font text-center mb-4">
              About Our Services
            </h1>
            <p className="text-lg text-center px-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem
              distinctio reprehenderit, enim quod excepturi voluptates omnis magni
              soluta dolores voluptate quasi incidunt consectetur.
            </p>
            <div className="mt-4">
              <button className="bg-btn_bg text-white text-lg px-6 py-2 hover:bg-gray-900 duration-200 cursor-pointer">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
