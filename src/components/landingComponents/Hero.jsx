import React from "react";

const mediaData = [
  {
    name: "Good Housekeeping",
    quote: "“Mushroom coffee can help you focus”",
  },
  {
    name: "Oprah Daily",
    quote: "“I’m definitely a fan of the brand”",
    italic: true,
  },
  {
    name: "bon appétit",
    quote: "“Take us to fungi town!”",
  },
  {
    name: "goop",
    quote: "“An incredible blend of vegan protein”",
  },
  {
    name: "VOGUE",
    quote: "“Cult mushroom purveyor Four Sigmatic”",
  },
  {
    name: "BAZAAR",
    quote: "“Four Sigmatic has taken the health world by storm”",
  },
];

const Hero = () => {
  return (
    <section className="w-full h-screen max-[599px]:h-[120vh] text-[#F9F5ED] relative overflow-hidden">
    <div className="background w-full h-full">
      <video
        className="w-full h-full object-cover"
        loop
        muted
        autoPlay
        src="https://res.cloudinary.com/djzddppwb/video/upload/v1753532256/bg_yq57ud.mp4"
      ></video>
    </div>
  
    <div className="overlay absolute z-10 w-full h-full inset-0 backdrop-blur-sm flex flex-col items-center justify-end max-[599px]:justify-center">
      <div className="top flex flex-col items-center px-4 max-[599px]:pt-40 text-center">
        {/* Stars + Text */}
        <div className="flex items-center gap-2 text-[1vw] max-[1025px]:text-[2vw] max-[599px]:text-sm">
          <div className="stars flex items-center">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p>100,000+ Five Star Rating</p>
        </div>
  
        {/* Main Heading */}
        <h1 className="text-[4vw] max-[1025px]:text-[6vw] max-[599px]:text-[8vw] w-[60%] max-[1025px]:w-[80%] max-[599px]:w-full mt-4 leading-tight capitalize">
          Get your daily focus without the jitter
        </h1>
  
        {/* Subheading */}
        <p className="text-[1.3vw] max-[1025px]:text-[2vw] max-[599px]:text-sm mt-2">
          The Original Mushroom Coffee. Over 200 Million cups served.
        </p>
  
        {/* Buttons */}
        <div className="btns flex flex-wrap items-center justify-center gap-4 mt-6">
          <a href="#">
            <button className="text-[1.3vw] max-[1025px]:text-[2vw] max-[599px]:text-sm border border-[#FF8100] bg-[#FF8100] hover:bg-white hover:text-[#FF8100] duration-300 rounded-full px-12 py-2 max-[599px]:px-6 max-[599px]:py-2">
              Try Mushroom
            </button>
          </a>
          <a href="#">
            <button className="text-[1.3vw] max-[1025px]:text-[2vw] max-[599px]:text-sm border border-white hover:bg-white hover:text-black duration-300 rounded-full px-12 py-2 max-[599px]:px-6 max-[599px]:py-2">
              Shop All Products
            </button>
          </a>
        </div>
      </div>
  
      {/* Bottom media items */}
      <div className="btm mt-10 max-[599px]:mt-0 w-full py-10 px-4 flex flex-wrap justify-center gap-6 bg-transparent">
        {mediaData.map((media, index) => (
          <div
            key={index}
            className="w-40 h-40 max-[1025px]:w-32 max-[1025px]:h-32 max-[599px]:w-28 max-[599px]:h-28 relative flex flex-col items-center justify-center text-center text-white"
          >
            {/* Border */}
            <img
              src="https://res.cloudinary.com/djzddppwb/image/upload/v1753534906/border_giflpi.svg"
              alt=""
              className="absolute inset-0 w-full h-full pointer-events-none select-none rotate-180"
              style={{ zIndex: 1 }}
              draggable="false"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-2">
              <p
                className={`text-xs max-[599px]:text-[10px] ${
                  media.italic ? "italic font-script" : "font-bold uppercase"
                }`}
              >
                {media.name}
              </p>
              <p className="text-sm max-[599px]:text-[11px] mt-2">{media.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Hero;
