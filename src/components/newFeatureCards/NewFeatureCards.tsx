import React from "react";
import Slider from "react-slick";
import { FlipCard } from "./components/FlipCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NEW_FEATURES } from "./constants";
import Image from "next/image";
import logo from "../../../public/logo.png";

export const NewFeatureCards = (): JSX.Element => {
  return (
    <div className="p-4 py-18 lg:p-32 flex flex-col bg-black gap-8">
      <div className="flex-1 flex justify-center items-center mt-20 md:mt-15 text-center text-white">
        <div className="w-72 h-24"> {/* Adjust width using Tailwind CSS classes */}
          <Image src={logo} alt="Cap X" />
        </div>
      </div>
      <div className="flex-1 text-white mb-4 text-3xl lg:text-4xl md:text-4xl flex text-center justify-center">
        will help you
      </div>
      <div>
        <Slider
          infinite={true}
          centerPadding="48px"
          slidesToShow={3}
          speed={500}
          swipeToSlide={true}
          dots={true}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                centerPadding: "24px",
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerPadding: "12px",
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {NEW_FEATURES.map((item, index) => (
            <div key={item.id} className="h-96 lg:w-36 md:w-56 w-full p-4">
              <FlipCard {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
