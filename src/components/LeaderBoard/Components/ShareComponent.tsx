import Image from "next/image";
import { shareArray } from "./Constants";

export const ShareComponent = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#75757533",
        }}
        className="flex flex-col sm:flex-row justify-around gap-4 p-4 md:p-8 lg:p-12 xl:p-20 items-center"
      >
        {shareArray?.map((x, index) => (
          <div
            key={index}
            className="p-1 border-rounded bg-gradient-to-r from-yellow-300 to-orange-500 rounded-full"
          >
            <div className="rounded-full bg-gray-950 p-4 gap-3 text-white flex items-center justify-center">
              <Image src={x?.img} alt="Cap X" width={40} />
              <div className="text-xs  font-extrabold italic text-base md:text-base lg:text-xl xl:text-lg leading-5 sm:leading-6 lg:leading-7 xl:leading-6 tracking-widest">
                {x?.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
