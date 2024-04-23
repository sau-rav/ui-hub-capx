import Image from "next/image";

import flip1 from "../../../../public/flip1.png";
import flip2 from "../../../../public/flip2.png";
import flip3 from "../../../../public/flip3.png";
import flip4 from "../../../../public/flip4.png";
import flip5 from "../../../../public/flip5.png";

const SRC_TO_IMAGE = {
  flip1: flip1,
  flip2: flip2,
  flip3: flip3,
  flip4: flip4,
  flip5: flip5,
};

export const FlipCard = ({
  title,
  description,
  src,
  size,
  className,
  background,
}: {
  title: string;
  description: string;
  src: string;
  size: number;
  className?: string;
  background: string;
}): JSX.Element => {
  return (
    <div className="group w-full h-full [perspective:1000px]">
      <div className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] p-4">
        <div className="absolute inset-0 text-4xl text-slate-200 backface-hidden rounded-xl border">
          <div
            className={`flex min-h-full flex-col items-start justify-start p-10 relative bg-gradient-to-t from-green-700 via-black to-black rounded-xl`}
          >
            {src ? (
              <div className={className}>
                <img
                  /*@ts-ignore*/
                  src={SRC_TO_IMAGE[src].src}
                  alt={`Flip Image - ${title}`}
                  //   style={{ width: "60%", height: "50%", objectFit: "cover" }}
                  width={size}
                  height={size}
                />
              </div>
            ) : null}
            <h1 className="text-2xl lg:text-4xl md:text-3xl font-bold z-10">
              {title}
            </h1>
          </div>
        </div>
        <div
          className={`absolute inset-0 h-full w-full rounded-xl border bg-black/80 px-12 text-center text-slate-200 bg-gradient-to-t from-${background} via-black to-black [transform:rotateY(180deg)] [backface-visibility:hidden]`}
        >
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-xl lg:text-2xl md:text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
