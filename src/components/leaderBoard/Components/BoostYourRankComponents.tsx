import Image from "next/image";
import LockImg from "../../../../public/LockImg.svg";
import { boostYourRank } from "./Constants";

export const BoostYourRankComponents = () => {
  return (
    <>
      <div
        style={{
          padding: 20,
          backgroundColor: "black",
          textAlign: "start",
        }}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-10 md:leading-12 font-montserrat text-white">
          More ways to boost your rank coming soon...
        </div>
      </div>

      <div
        className="horizontal-scroll-container"
        style={{
          padding: 20,
          backgroundColor: "black",
          display: "flex",
          gap: 20,
          overflowX: "auto",
          width: "100%",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {boostYourRank.map((_item) => (
          <div
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
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
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
