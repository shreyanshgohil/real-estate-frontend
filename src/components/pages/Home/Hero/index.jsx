import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { heroItems } from "@/constants/home";
const Hero = () => {
  const string = "PILLARREAL ESTATE HOME * REALESTATE";

  return (
    <section
      className="relative overflow-hidden bg-brand-neutral-200"
      style={{
        mask: `url("/images/home/hero-2-bg-mask.png")`,
        maskSize: "100% 100%",
      }}
    >
      <div>
        <video
          src="/videos/hero-2-video.mp4"
          className="absolute top-0 scale-150"
          loop
          muted
          autoPlay
        />
        <div className="bg-brand-gray-900 absolute h-full w-full top-0 left-0 z-10 opacity-50" />
      </div>
      <div className={`relative z-20  ${styles["hero-content"]}`}>
        <div className="container--boxed">
          <div
            className="relative flex items-center justify-center mb-12"
            data-aos="fade-up"
          >
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
              data-aos="fade-up"
            >
              Find Your <span className="text-brand-neutral">Perfect Home</span>{" "}
              For Spending Life
            </h1>
            <div
              data-aos="fade-up"
              className="bg-white py-4 px-10 flex items-center rounded-full gap-4 mb-4"
            >
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm font-semibold">
                  Property Type
                </label>
                <select
                  name=""
                  id=""
                  className="border-none pl-0 text-sm pr-8 focus:outline-none focus:!shadow-none"
                >
                  <option value="">Select Make</option>
                </select>
              </div>
              {/* <span
                className="mx-4 block"
                style={{ width: "1px", height: "40px", background: "#D8DDE1" }}
              /> */}
              <div className="flex">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm font-semibold">
                    Location
                  </label>
                  <input
                    type="text"
                    className="text-sm p-0 border-none font-medium"
                    placeholder="Find a location"
                  />
                </div>
                <Image
                  src={"/images/icons/location-icon.svg"}
                  alt=""
                  height={17}
                  width={17}
                />
              </div>
              <span />
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-sm p-0 border-none font-medium"
                >
                  Keyword
                </label>
                <input
                  type="text"
                  className="p-0 border-none font-medium text-sm"
                  placeholder="Looking For?"
                />
              </div>
              <span />
              <div className="flex gap-5">
                <button className="button--primary btn--white flex gap-2 items-center">
                  <span>Advanced</span>
                  <i className="fa-solid fa-sliders-up text-sm relative z-10 leading-none" />
                </button>
                <button className="button--primary btn--theme flex gap-3 items-center">
                  <i className="far fa-search text-sm relative z-10 leading-none" />
                  <span>Search</span>
                </button>
              </div>
            </div>
            <div className="flex gap-4" data-aos="fade-up">
              {heroItems.map((typeOfProperty, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2.5 items-center bg-black px-4 py-2 rounded-full"
                    style={{ height: "38px" }}
                  >
                    <Image
                      src={typeOfProperty.image}
                      width={typeOfProperty.width}
                      height={typeOfProperty.height}
                      alt={typeOfProperty.title}
                    />
                    <span className="text-sm text-white">
                      {typeOfProperty.title}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-0 -translate-y-full left-1/2 -translate-x-1/2">
              <div
                className={`relative border border-solid border-white rounded-full cursor-pointer ${styles["mouse-icon"]}`}
                style={{ height: "60px", width: "40px" }}
              >
                <span className="w-2 h-2 inline-block rounded-full bg-brand-neutral absolute left-1/2 -translate-x-1/2 top-1" />
              </div>
              <span className="text-sm font-medium text-white">Scroll</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
