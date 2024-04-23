import React from "react";
import Slider from "react-slick";
import { FlipCard } from "./components/FlipCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NEW_FEATURES } from "./constants";

export const NewFeatureCards = (): JSX.Element => {
  return (
    <div className="p-4 lg:p-32 flex flex-col bg-black gap-8">
      <div className="flex-1 text-white text-5xl lg:text-9xl md:text-7xl font-bold flex justify-center">
        CapX will help you
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
