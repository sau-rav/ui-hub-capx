import { useState } from "react";

export const ComponentPerksForBeta = () => {
  return (
    <>
      <div
        style={{
          padding: 20,
          backgroundColor: "black",
          textAlign: "start",
        }}
      >
        <div className="text-white font-bold text-2xl md:text-7xl lg:text-8xl ">
          Perks of joining <span className="text-yellow-500">waitlist</span>
        </div>
      </div>

      <div
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="mx-6 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {Array(5)
          .fill(0)
          .map((index) => (
            <Card key={index} />
          ))}
      </div>
    </>
  );
};

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="snap-start flex-shrink-0 sm:w-4/5 w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4">
      <div className="px-1 rounded-xl  pt-1 bg-gradient-to-r from-yellow-500 to-yellow-300">
        <div
          className="p-5 bg-yellow-500 snap-start"
          style={{
            borderStartStartRadius: "8px",
            borderStartEndRadius: "8px",
            borderEndStartRadius: !isOpen ? "8px" : "0px",
            borderEndEndRadius: !isOpen ? "8px" : "0px",
            height: "300px",
          }}
        >
          <div
            style={{
              height: "40%",
            }}
            className="flex justify-center"
          >
            <img src={"/BotImg.png"} alt="Cap X" />
          </div>
          <p
            style={{
              height: "20%",
            }}
            className="flex items-center justify-center text-center mt-5  font-semibold text-xl md:text-xl tracking-wider text-black"
          >
            {"Test strategies like a pro"}
          </p>
          <div
            style={{
              height: "40%",
            }}
            className="flex items-center justify-center"
          >
            <button
              onClick={() => toggleOpen()}
              className="mt-6  font-semibold text-xl md:text-2xl tracking-wider text-white px-8 py-4 rounded-2xl border-2 border-white"
            >
              {isOpen ? "SHOW LESS" : "KNOW MORE"}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            borderEndStartRadius: "8px",
            borderEndEndRadius: "6px",
          }}
          className="bg-gradient-to-r from-yellow-500 to-yellow-300 overflow-hidden"
        >
          <div
            className={`p-1 overflow-hidden transition-max-h duration-500 ease-in-out ${
              isOpen ? "max-h-full" : "max-h-0"
            }`}
          >
            <div className="p-4 px-10 text-center bg-black text-white p-4">
              {
                "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis ris Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora consectetur adipiscing elit. Etiam eu turpis risMaecenas eget condimentum velit, sit a"
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
