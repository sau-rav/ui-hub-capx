import { rankArray } from "./Constants";

export const SurveyBanner = () => {
  return (
    <div className="px-2">
      <div
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="flex snap-x gap-6 overflow-x-auto py-6"
      >
        {rankArray.map((item, index) => (
          <div
            key={index}
            className="flex-col flex w-3/4 snap-start xl:w-1/4 md:w-1/2 lg:w-1/2 flex-shrink-0 rounded-md p-3 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            <div className="flex-1">
              <div className="text-start flex text-3xl md:text-5xl font-extrabold leading-10  text-white mt-10">
                {item.name}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex-1 text-start items-start flex text-lg md:text-xl font-extrabold leading-2 md:leading-10  text-white pt-8 pb-14">
                {item.subName}
              </div>
              <div className="flex-1 flex items-end justify-center">
                <div className="flex justify-center items-center">
                  <div className="text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-extrabold leading-9 text-white px-6 sm:px-8 py-2 sm:py-4 rounded-full border-2 border-white">
                    {item.buttonName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
