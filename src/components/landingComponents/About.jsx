import React from "react";

const About = () => {
  return (
    <section
  id="about"
  className="w-full min-h-screen relative overflow-hidden text-[#59432D] py-20 max-[599px]:py-10 px-24 max-[1025px]:px-12 max-[599px]:px-6 flex flex-col justify-between"
  style={{
    background: "linear-gradient(to bottom, #F9F5ED, #FAE9C6)",
  }}
>
  {/* Top Heading */}
  <div className="top flex justify-start">
    <h1 className="text-[5vw] max-[1025px]:text-[6vw] max-[599px]:text-[8vw] w-1/2 max-[1025px]:w-3/4 max-[599px]:w-full leading-tight font-bold">
      Real premium coffee made smarter™
    </h1>
  </div>

  {/* Bottom Content */}
  <div className="btm flex flex-col gap-10 mt-12 max-[599px]:gap-6">
    {/* Subheading */}
    <div className="top flex items-center justify-center text-center px-4">
      <h1 className="text-[1.5vw] max-[1025px]:text-[2vw] max-[599px]:text-base font-semibold">
        A daily cup of Four Sigmatic Original Mushroom Coffee™ helps with:
      </h1>
    </div>

    {/* Circle Icons */}
    <div className="w-full flex items-center justify-center gap-10 flex-wrap max-[599px]:gap-4">
      {[1, 2, 3, 4].map((_, i) => (
        <div
          key={i}
          className="circle rounded-full bg-white h-20 w-20 p-6 flex items-center justify-center text-sm font-semibold shadow-md"
        >
          zdfn
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <div className="btn flex items-center justify-center">
      <a href="#">
        <button className="text-[1.3vw] max-[1025px]:text-[1.8vw] max-[599px]:text-sm cursor-pointer border border-[#FF8100] bg-[#FF8100] text-white hover:bg-white hover:text-[#FF8100] transition duration-300 rounded-full px-6 py-2 max-[599px]:px-4 max-[599px]:py-1">
          Try the Original Mushroom Coffee™
        </button>
      </a>
    </div>
  </div>
</section>

  );
};

export default About;
