
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";

const images = [
  "https://res.cloudinary.com/djzddppwb/image/upload/v1753637958/helcias77_A_close-up_of_a_hand_gently_writing_on_dusty_ground_4fe8c48e-bbf7-40a7-9ec9-709dff405a04_0_hjanyn.png",
  "https://res.cloudinary.com/djzddppwb/image/upload/v1753637958/Firefly_there_is_a_cast_iron_mixer_tea_into_two_cups_steaming_orange_tea_ceremony_scene_dr_225465_syl6is.jpg",
];

const Loader = () => {
  const loader = useRef(null);
  const line = useRef(null);
  const text = useRef([]);
  const anim = useRef(null);
  const img = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 500);

    const tl = gsap.timeline({
      defaults :{
        willChange : "transform"
      }
    });

    tl.to(anim.current,{
      width : "100%",
      duration : 2,
      ease : "none",
      repeat : -1
    })
    .to(line.current,{
      xPercent : 100,
      duration :.5
    },"b")
    .to(text.current,{
      y : -10,
      opacity : 0
    },"b")
    .to(img.current,{
      opacity : 0,
    },"b")
    .to(
      loader.current,
      {
        opacity: 0,
        duration: 0.5,
        willChange: "opacity",
        display: "none",
        ease: "none",
      },"a"
    )

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={loader}
      className="w-full h-screen bg-[#F9F5ED] text-[#59432D] flex items-center justify-between flex-col fixed top-0 left-0 z-[99999]"
    >
      <div
        ref={line}
        className="w-[95%] mt-2 h-[.3%] bg-[#59432D]/10 rounded-full relative overflow-hidden"
      >
        <span ref={anim} className="anim absolute top-0 left-0 w-0 h-full bg-[#59432D]"></span>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full flex items-center justify-center ">
        <div className="flex w-[15%] h-[40%] flex-col items-center justify-center">
          <img
          ref={img}
            src={images[currentImage]}
            alt="Loader"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div
         ref={text}
        className="w-full flex items-center justify-between px-6 py-2 font-[one] text-[#59432D]"
      >
        <h1>Mundy</h1>
        <CountUp to={100} from={0} separator="," direction="up" duration={2} />
        <h1>Express</h1>
      </div>
    </section>
  );
};

export default Loader;
