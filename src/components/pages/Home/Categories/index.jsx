import { ChooseYourPropertyType } from "@/constants/home";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
const Categories = () => {
  return (
    <section className="bg-brand-neutral-200 section--md pt-16">
      <div className="container--boxed">
        <div className="flex items-center justify-center gap-2.5 mb-1.5">
          <div className="flex flex-col gap-1 items-end">
            <span className="h-0.5 w-3 bg-brand-gray-800" />
            <span className="h-0.5 w-5 bg-brand-neutral" />
          </div>
          <p className="font-bold text-brand-neutral text-center">CATEGORIES</p>
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-3 bg-brand-gray-800" />
            <span className="h-0.5 w-5 bg-brand-neutral" />
          </div>
        </div>
        <div>
          <h2 className="heading--h2 text-center mb-12">
            Choose Your Property Type
          </h2>
          <Swiper
            spaceBetween={24}
            slidesPerView={"auto"}
            loop={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            // modules={[Autoplay]}
          >
            {[...ChooseYourPropertyType, ...ChooseYourPropertyType].map(
              (singleProperty, index) => {
                return (
                  <SwiperSlide key={index} className="!w-auto pt-12">
                    <Link
                      href={singleProperty.url}
                      className={`flex flex-col items-center px-7 pb-8 pt-12 bg-white border border-solid rounded-lg relative ${styles["property-type"]}`}
                      style={{ borderColor: "#E4E4E5" }}
                    >
                      <div
                        className="w-24 h-24 flex items-center justify-center rounded-full border  border-solid top-0 bg-white absolute -translate-y-1/2"
                        style={{ borderColor: "#E4E4E5" }}
                      >
                        <Image
                          src={singleProperty.image}
                          height={singleProperty.height}
                          width={singleProperty.width}
                          alt={singleProperty.title}
                        />
                      </div>
                      <div className="w-40 flex items-center flex-col mt-7">
                        <p className="text-xl font-semibold text-brand-gray-800">
                          {singleProperty.title}
                        </p>
                        <span className="text-brand-neutral-600 text-lg font-medium">
                          {singleProperty.count} Property
                        </span>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Categories;
