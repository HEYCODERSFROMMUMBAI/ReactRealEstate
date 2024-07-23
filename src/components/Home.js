
// import React, { useEffect, useRef } from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import BannerImg from "./assets/images/bannerImg.jpg";
// import About from "./components/About";
// import Services from "./components/Services";
// import Programs from "./components/Programs";
// import Leaders from "./components/Leaders";
// import Contact from "./components/Contact";
// import Typed from "typed.js";

// const Home = () => {
//   const typeTarget = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(typeTarget.current, {
//       strings: [
//         "10 years without any Lost Time Incidents.",
//         "Best services in India.",
//         "Recognized by major Indian petroleum companies.",
//       ],
//       typeSpeed: 120,
//       smartBackspace: true,
//       loop: true,
//     });
//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       <Header />

//       {/* Home Banner */}
//       <div className="relative">
//         <img
//           src={BannerImg}
//           alt="BannerImg"
//           className="w-full h-screen object-cover contrast-125 grayscale group-hover:grayscale-0 duration-150"
//         />

//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <h2 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//             Updates:{" "}
//             <span className="text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold" ref={typeTarget}></span>
//           </h2>
//           <h1 className="text-black font-title_font text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
//             ChauhanEstate
//           </h1>
//           <span className="bg-secondry_color inline-block w-72 h-2 md:h-3 lg:h-4 mb-8"></span>
//         </div>
//       </div>

//       <About />
//       <Services />
//       <Programs />
//       <Leaders />
//       <Contact />

//       <Footer />
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useRef } from "react";
import Footer from "./Footer";
import Header from "./Header";
import BannerImg from "../assets/images/bannerImg.jpg";
import About from "./About";
import Services from "./Services";
import Programs from "./Programs";
import Leaders from "./Leaders";
import Contact from "./Contact";
import Typed from "typed.js";

const Home = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "10 years without any Lost Time Incidents.",
        "Best services in India.",
        "Recognized by major Indian petroleum companies.",
      ],
      typeSpeed: 120,
      smartBackspace: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="min-h-screen">
      <Header />

      {/* Home Banner */}
      <div className="relative">
        <img
          src={BannerImg}
          alt="BannerImg"
          className="w-full h-auto md:h-screen object-cover contrast-125 grayscale group-hover:grayscale-0 duration-150"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h2 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            Updates:{" "}
            <span className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-bold" ref={typeTarget}></span>
          </h2>
          <h1 className="text-black font-title_font text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            ChauhanEstate
          </h1>
          <span className="bg-secondry_color inline-block w-40 md:w-72 h-1 md:h-2 lg:h-3 mb-4 md:mb-8"></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8">
        <About />
        <Services />
        <Programs />
        <Leaders />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
