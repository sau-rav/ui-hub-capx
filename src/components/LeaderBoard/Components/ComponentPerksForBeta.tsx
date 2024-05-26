import { useState } from "react";

interface ComponentPerksForBetaProps {
  img: string;
  title: string;
  description: string;
}

export const ComponentPerksForBeta = ({
  data,
}: {
  data: ComponentPerksForBetaProps[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      <div
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {data.map((item, index) => (
          <Card
            item={item}
            key={index}
            isOpen={openIndex === index}
            toggleOpen={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  item: {
    img: string;
    title: string;
    description: string;
  };
  isOpen: boolean;
  toggleOpen: () => void;
}

const Card = ({ item, isOpen, toggleOpen }: CardProps) => {
  return (
    <div className="snap-start flex-shrink-0 sm:w-4/5 w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4">
      <div
        className={`p-0.5 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-300`}
      >
        <div
          className={`rounded-t-xl ${
            !isOpen ? "rounded-b-xl delay-1s" : ""
          } px-1 bg-accordionFooter snap-start`}
          style={{
            height: "250px",
          }}
        >
          <div
            style={{ height: "40%" }}
            className="items-center flex justify-center"
          >
            <img className="mx-auto h-16" src={item.img} alt="Cap X" />
          </div>
          <div
            style={{ height: "20%" }}
            className="flex text-accordionText uppercase items-center justify-center text-center font-semibold sm:text-xl md:text-xl lg:text-2xl tracking-wider"
          >
            {item.title}
          </div>
          <div
            style={{ height: "40%" }}
            className="flex items-center justify-center"
          >
            <button
              onClick={toggleOpen}
              className="mt-6 mb-4 font-semibold text-sm md:text-xl lg:text-2xl tracking-wider text-white px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-white"
            >
              {isOpen ? "SHOW LESS" : "KNOW MORE"}
            </button>
          </div>
        </div>
        <div
          className={`rounded-b-xl overflow-hidden ${
            isOpen ? "active" : "inactive"
          }`}
        >
          <div className="p-4 px-10 flex justify-center text-center bg-black text-white">
            {item.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPerksForBeta;
