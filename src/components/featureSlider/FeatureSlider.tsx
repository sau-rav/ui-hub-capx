import { useState } from "react";
import Slider from "react-slick";

import { Card } from "./components/Card";

import { FEATURES } from "./constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FeatureSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true,
    dots: true,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: "240px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "160px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 920,
        settings: {
          centerPadding: "120px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          centerPadding: "80px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "8px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col justify-center text-white items-center gap-16 lg:py-48 py-12 md:py-24 font-montserrat">
      <div className="flex gap-8 text-3xl lg:text-4xl md:text-4xl font-montserrat">
        <div>S A Y</div>
        <div>G O O D B Y E</div>
        <div>T O</div>
      </div>
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
