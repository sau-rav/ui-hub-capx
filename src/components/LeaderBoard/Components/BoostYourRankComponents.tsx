import Image from "next/image";
import LockImg from "../../../../public/LockImg.svg";
import { boostYourRank } from "./Constants";

export const BoostYourRankComponents = () => {
  return (
    <>
      <div className="text-start p-4">
        <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-10 md:leading-12  text-white">
          More ways to boost your rank coming soon...
        </div>
      </div>

      <div
        className="snap-x p-4 flex gap-4 overflow-x-auto"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {boostYourRank.map((_item) => (
          <div
            className="snap-start"
            key={_item.img}
            style={{
              minWidth: 284,
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              height: 364,
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundImage: `url("${_item.img}")`,
                backgroundSize: "cover",
                filter: "blur(4px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              <Image src={LockImg} alt="Cap X" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
