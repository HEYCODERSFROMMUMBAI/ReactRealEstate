// import React from "react";

// const Contact = () => {
//   return (
//     <div name="contact" className="w-full h-auto">
//       <div className="max-w-7xl h-auto mx-auto flex justify-center px-20 py-20 items-center">
//         <div className="w-1/2 px-10">
//           <ul className="mb-4">
//             <li className="text-xl font-bold font-title_font tracking-wider">
//               ChauhanEstate
//             </li>
//             <li>Rwui MBD Mumbai</li>
//             <li>(Near LAMA Polyclinic Hospital)</li>
//             <li>Mumbai, Maharashtra, India</li>
//           </ul>
//           <ul>
//             <li>
//               <span className="font-semibold">Telephone: </span>+8369262375
//             </li>
//             <li>
//               <span className="font-semibold">Fax: </span>+8369262375
//             </li>
//             <li>
//               <span className="font-semibold">Email: </span>
//               rakesh112233rc@gmail.com
//             </li>

//           </ul>
//         </div>
//         <div className="w-1/2 px-10">
//           <div className="border-setBorder border-secondry_color  w-96 h-auto py-6">
//             <h2 className="text-3xl px-10 font-title_font font-bold ">
//               Follow Us!
//             </h2>
//             <p className="text-lg px-10">
//               Please fill out the form below with any questions you may have and
//               someone will respond to you shortly. Thank You.
//             </p>
//             <button className=" bg-btn_bg font-title_font ml-10 mt-3 text-white text-lg px-6 py-2 hover:bg-gray-900 duration-200 cursor-pointer">
//               follow
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Contact Information */}
          <div className="w-full sm:w-1/2 px-4">
            <ul className="mb-6">
              <li className="text-xl font-bold font-title_font tracking-wider mb-2">
                ChauhanEstate
              </li>
              <li>Rwui MBD Mumbai</li>
              <li>(Near LAMA Polyclinic Hospital)</li>
              <li>Mumbai, Maharashtra, India</li>
            </ul>
            <ul>
              <li>
                <span className="font-semibold">Telephone: </span>+8369262375
              </li>
              <li>
                <span className="font-semibold">Fax: </span>+8369262375
              </li>
              <li>
                <span className="font-semibold">Email: </span>
                rakesh112233rc@gmail.com
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <div className="w-full sm:w-1/2 px-4">
            <div className="border border-secondry_color rounded-lg p-6">
              <h2 className="text-3xl font-title_font font-bold mb-4">
                Follow Us!
              </h2>
              <p className="text-lg mb-4">
                Please fill out the form below with any questions you may have
                and someone will respond to you shortly. Thank You.
              </p>
              <button className="bg-btn_bg text-white text-lg px-6 py-2 rounded-lg hover:bg-gray-900 duration-200 cursor-pointer">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
