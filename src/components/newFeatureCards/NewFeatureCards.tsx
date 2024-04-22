import Slider from "react-slick";

import { FlipCard } from "./components/FlipCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NEW_FEATURES } from "./constants";

export const NewFeatureCards = (): JSX.Element => {
  const settings = {
    infinite: true,
    centerPadding: "48px",
    slidesToShow: 3,
    speed: 500,
    swipeToSlide: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-32 flex flex-col bg-black gap-8">
      <div className="flex-1 text-white text-5xl lg:text-9xl md:text-7xl font-bold flex justify-center">
        CapX will help you
      </div>
      <div>
        <Slider {...settings}>
          {NEW_FEATURES.map((item, index) => (
            <div key={item.id} className="h-96 w-36 p-4">
              <FlipCard {...item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
