import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <video
          src="/videos/hero-2-video.mp4"
          className="absolute top-0 -z-10"
          loop
          muted
          autoPlay
        />
      </div>
    </div>
  );
};

export default Hero;
