import React from "react";
import styles from "./style.module.scss";
const Hero = () => {
  const string = "PILLARREAL ESTATE HOME * REALESTATE";

  return (
    <section>
      <div>
        <video
          src="/videos/hero-2-video.mp4"
          className="absolute top-0"
          loop
          muted
          autoPlay
        />
        <div className="bg-brand-gray-900 absolute h-full w-full top-0 left-0 z-10 opacity-50" />
      </div>
      <div className={`relative z-20  ${styles["hero-content"]}`}>
        <div className="container--boxed">
          <div className="relative flex items-center justify-center mb-12">
            <div
              className="relative flex items-center justify-center bg-brand-gray-400 rounded-full text-brand-neutral hover:text-white transition-all duration-500 cursor-pointer"
              style={{ height: "70px", width: "70px" }}
            >
              <i
                className="fa-sharp fa-solid fa-play "
                style={{ fontSize: "27px" }}
              />
            </div>
            <div
              className={`absolute h-full -top-1/2 -translate-x-1/2 -translate-y-1/2 ${styles["text-wrapper"]}`}
            >
              {string.split("").map((s, i) => (
                <span
                  className="absolute left-1/2 text-white font-medium text-sm"
                  key={i}
                  style={{
                    transform: `rotate(${i * (360 / string.length)}deg)`,
                    transformOrigin: "0 70px",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1
              className="heading--h1 text-center text-white mb-10"
              style={{ maxWidth: "886px" }}
            >
              Find Your <span className="text-brand-neutral">Perfect Home</span>{" "}
              For Spending Life
            </h1>
            <div className="bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
