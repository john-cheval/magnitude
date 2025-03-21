import React from "react";
import OutlineButton from "../common/OutlineButton";

const HomeHero = ({ title, link, linkText, videoUrl }) => {
  return (
    <section className=" h-screen overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute bottom-[76px] left-1/2 -translate-x-1/2 space-y-9 z-50">
        <h1 className="text-2xl sm:text-3xl"> {title}</h1>
        <div className="flex items-center justify-center">
          <OutlineButton link={link} text={linkText} />
        </div>
      </div>

      <div className="absolute w-full h-full max-h-[288px] bg-homeHero bottom-0 left-0 z-40" />

      <div className="absolute w-full h-full max-h-[288px] bg-homeHero2 top-0 left-0 z-40" />
    </section>
  );
};

export default HomeHero;
