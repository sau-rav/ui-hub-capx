import Image from "next/image";
import LockImg from "../../../../public/LockImg.svg";
import { boostYourRank, headerCommonStyle } from "./Constants";

export const BoostYourRankComponents = () => {
  return (
    <div className="p-2">
      <div className="text-start p-4">
        <div className={`${headerCommonStyle}`}>
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
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
              height: 300,
              minWidth: "244px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundImage: `url("${_item.img}")`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
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
    </div>
  );
};
