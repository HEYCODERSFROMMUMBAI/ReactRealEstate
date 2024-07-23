// import React from "react";
import LeaderImgOne from "../assets/images/leaders/1.webp";
import LeaderImgTwo from "../assets/images/leaders/2.webp";
import ProgramBottomImg from "../assets/images/qhse.jpg";

const Leaders = () => {
  return (
    <div id="leaders" className="bg-primary_color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-white text-3xl font-title_font font-semibold underline underline-offset-4 tracking-wide text-center mb-8">
          Messages from Management
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Leader One */}
          <div className="flex flex-col justify-center items-center bg-gray-800 rounded-lg p-6 text-white">
            <img
              src={LeaderImgOne}
              className="w-24 h-24 rounded-full mb-4 object-cover"
              alt="Leader One"
            />
            <p className="text-lg text-center px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatum distinctio veniam consectetur deserunt fuga deleniti
              placeat error excepturi dolores quos ullam suscipit, nam natus,
              provident eaque dicta. Pariatur, delectus.
            </p>
            <h3 className="text-xl font-semibold font-title_font text-center mt-4">
              Bertie Norton
            </h3>
            <div className="w-24 h-1 bg-secondry_color mt-4"></div>
          </div>
          {/* Leader Two */}
          <div className="flex flex-col justify-center items-center bg-gray-800 rounded-lg p-6 text-white">
            <img
              src={LeaderImgTwo}
              className="w-24 h-24 rounded-full mb-4 object-cover"
              alt="Leader Two"
            />
            <p className="text-lg text-center px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              voluptatum distinctio veniam consectetur deserunt fuga deleniti
              placeat error excepturi dolores quos ullam suscipit, nam natus,
              provident eaque dicta. Pariatur, delectus.
            </p>
            <h3 className="text-xl font-semibold font-title_font text-center mt-4">
              Elon Musk
            </h3>
            <div className="w-24 h-1 bg-secondry_color mt-4"></div>
          </div>
        </div>
      </div>
      {/* Bottom Image */}
      <div>
        <img
          src={ProgramBottomImg}
          className="w-full h-48 object-cover"
          alt="Bottom Image"
        />
      </div>
    </div>
  );
};

export default Leaders;
