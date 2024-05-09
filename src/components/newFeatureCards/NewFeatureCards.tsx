import React from "react";
import Slider from "react-slick";
import { FlipCard } from "./components/FlipCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NEW_FEATURES } from "./constants";

export const NewFeatureCards = (): JSX.Element => {
  return (
    <div className="lg:py-48 py-12 md:py-24 lg:px-32 flex flex-col bg-black gap-8">
      <div className="text-white justify-center italic flex gap-8 text-4xl lg:text-8xl md:text-6xl font-montserrat">
        CapX will help you
      </div>

      <div className="px-8">
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
            <div key={item.id} className="h-104 lg:w-72 md:w-56 w-full p-4">
              <FlipCard {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
