import { rankArray } from "./Constants";

export const SurveyBanner = () => {
  return (
    <div className="relative">
      <div
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="scrollBarHide flex gap-6 overflow-x-auto p-6"
      >
        {rankArray.map((item, index) => (
          <div
            key={index}
            className="w-3/4 xl:w-1/4 md:w-1/2 lg:w-1/2 flex-shrink-0 rounded-md p-3 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          >
            <div className="text-start text-3xl h-2/5 md:text-5xl font-extrabold leading-10 font-montserrat text-white mt-10">
              {item.name}
            </div>
            <div className="text-start text-lg h-1/4 md:text-xl font-extrabold leading-2 md:leading-10 font-montserrat text-white pt-8 pb-14">
              {item.subName}
            </div>
            <div className="h-1/4 flex justify-center">
              <div className="flex justify-center items-center py-6">
                <div className="text-base md:text-xl font-extrabold leading-9 font-montserrat text-white px-8 py-2 rounded-full border-2 border-white">
                  {item.buttonName}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
