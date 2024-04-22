import { useState } from "react";
import Slider from "react-slick";

import { Card } from "./components/Card";

import { FEATURES } from "./constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    swipeToSlide: true,
    dots: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center text-white items-center gap-16 py-36 font-montserrat">
      <div className="text-3xl lg:text-5xl md:text-4xl"> SAY GOODBYE TO</div>
      <div className="w-3/4 slider-container ">
        <Slider {...settings}>
          {FEATURES.map((item, index) => (
            <Card key={item.id} card={item} visible={index === currentIndex} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
