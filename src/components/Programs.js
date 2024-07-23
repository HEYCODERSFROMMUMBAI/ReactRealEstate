// // import React from "react";
// import ProgramImgOne from "../assets/images/program/3.webp";
// import ProgramImgTwo from "../assets/images/program/2.webp";
// import ProgramImgThree from "../assets/images/program/1.webp";
// import ProgramImgFour from "../assets/images/program/4.webp";
// import ProgramImgFive from "../assets/images/program/5.webp";

// const Programs = () => {
//   return (
//     <div id="programs" className="bg-gray-100 py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Grid layout for different screen sizes */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {/* First image */}
//           <div className="flex items-center justify-center mb-6 sm:mb-0">
//             <img
//               src={ProgramImgOne}
//               className="w-full h-full object-center max-h-96 object-cover rounded-lg shadow-lg"
//               alt="Program 1"
//             />
//           </div>
//           {/* Second image */}
//           <div className="flex items-center justify-center mb-6 sm:mb-0">
//             <img
//               src={ProgramImgTwo}
//               className="w-full h-full object-center max-h-96 object-cover rounded-lg shadow-lg"
//               alt="Program 2"
//             />
//           </div>
//           {/* Program details */}
//           <div className="border border-secondary_color rounded-lg p-4 flex flex-col justify-center items-center sm:col-span-2 lg:col-span-3">
//             <h1 className="text-4xl font-semibold font-title_font text-center mb-4">
//               Our Latest Programs
//             </h1>
//             <p className="text-lg text-gray-700 mb-4 px-6 lg:px-12 text-center">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
//               molestias natus! Voluptate necessitatibus, optio, maiores tempore
//               tenetur error, a dolor amet veritatis corporis soluta cupiditate.
//               Dolore beatae incidunt provident laudantium facilis ea temporibus,
//               quos illo vel amet vitae. Dignissimos repellat sed harum qui veniam
//               tenetur sunt eveniet in quae similique?
//             </p>
//             <button className="bg-btn_bg text-white text-lg px-6 py-2 rounded-lg hover:bg-gray-900 duration-200 cursor-pointer">
//               Read More
//             </button>
//           </div>
//           {/* Third and fourth images */}
//           <div className="flex items-center justify-center">
//             <div className="flex flex-col items-center">
//               <img
//                 src={ProgramImgThree}
//                 className="w-full h-full max-h-96 object-cover rounded-lg shadow-lg mb-2"
//                 alt="Program 3"
//               />
//               <img
//                 src={ProgramImgFour}
//                 className="w-full h-full max-h-96 object-cover rounded-lg shadow-lg"
//                 alt="Program 4"
//               />
//             </div>
//           </div>
//           {/* Fifth image */}
//           <div className="hidden lg:flex items-center justify-center">
//             <img
//               src={ProgramImgFive}
//               className="w-full h-full max-h-96 object-cover rounded-lg shadow-lg"
//               alt="Program 5"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Programs;
import React from "react";
import ProgramImgOne from "../assets/images/program/3.webp";
import ProgramImgTwo from "../assets/images/program/2.webp";
import ProgramImgThree from "../assets/images/program/1.webp";
import ProgramImgFour from "../assets/images/program/4.webp";
import ProgramImgFive from "../assets/images/program/5.webp";

const Programs = () => {
  return (
    <div id="programs" className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout for different screen sizes */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* First image */}
          <div className="flex items-center justify-center mb-6 sm:mb-0">
            <img
              src={ProgramImgOne}
              className="w-full h-full object-center max-h-96 object-cover rounded-lg shadow-lg"
              alt="Program 1"
            />
          </div>
          {/* Second image */}
          <div className="flex items-center justify-center mb-6 sm:mb-0">
            <img
              src={ProgramImgTwo}
              className="w-full h-full object-center max-h-96 object-cover rounded-lg shadow-lg"
              alt="Program 2"
            />
          </div>
          <div className="flex items-center justify-center mb-6 sm:mb-0">
            <img
              src={ProgramImgOne}
              className="w-full h-full object-center max-h-96 object-cover rounded-lg shadow-lg"
              alt="Program 1"
            />
          </div>
          {/* Program details */}
          <div className="border border-secondary_color rounded-lg p-4 flex flex-col justify-center items-center sm:col-span-2 lg:col-span-3">
            <h1 className="text-4xl font-semibold font-title_font text-center mb-4">
              Our Latest Programs
            </h1>
            <p className="text-lg text-gray-700 mb-4 px-6 lg:px-12 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
              molestias natus! Voluptate necessitatibus, optio, maiores tempore
              tenetur error, a dolor amet veritatis corporis soluta cupiditate.
              Dolore beatae incidunt provident laudantium facilis ea temporibus,
              quos illo vel amet vitae. Dignissimos repellat sed harum qui veniam
              tenetur sunt eveniet in quae similique?
            </p>
            <button className="bg-btn_bg text-white text-lg px-6 py-2 rounded-lg hover:bg-gray-900 duration-200 cursor-pointer">
              Read More
            </button>
          </div>
          {/* Third and fourth images */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img
                src={ProgramImgThree}
                className="w-full h-full max-h-110 object-cover rounded-lg shadow-lg mb-2"
                alt="Program 3"
              />
              {/* <img
                src={ProgramImgFour}
                className="w-full h-full max-h-96 object-cover rounded-lg shadow-lg"
                alt="Program 4"
              /> */}

            </div>
          </div>
          {/* Fifth image */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              src={ProgramImgFive}
              className="w-full h-full max-h-96 object-cover rounded-lg shadow-lg"
              alt="Program 5"
            />
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <img
              src={ProgramImgFour}
              className="w-full h-full max-h-96 object-cover rounded-lg shadow-lg"
              alt="Program 5"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Programs;
