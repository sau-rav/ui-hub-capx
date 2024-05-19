export const FlipCard = ({
  title,
  description,
  src,
  flipImage,
}: {
  title: string;
  description: string;
  src: string;
  size: number;
  className?: string;
  background: string;
  flipImage: string;
}): JSX.Element => {
  const imageSrc = `${src}.png`;
  const flipImageSrc = `${flipImage}.png`;

  return (
    <div className="group w-full h-full [perspective:1000px]">
      <div className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden] p-4">
        <div
          className="absolute inset-0 text-4xl text-slate-200 backface-hidden rounded-xl border lg:p-10 md:p-6 p-4"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-2xl lg:text-3xl md:text-2xl z-10 font-extrabold">
            {title}
          </div>

          <div
            className="text-base lg:text-xl md:text-lg z-10 font-extrabold border border-solid px-4 py-2 w-fit rounded-full absolute [backface-visibility:hidden]"
            style={{ top: "30%" }}
          >
            Know More
          </div>
        </div>
        <div
          className={`absolute inset-0 h-full w-full rounded-xl border bg-black/80 p-10 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col`}
          style={{
            backgroundImage: `url(${flipImageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="text-2xl lg:text-3xl md:text-2xl z-10 font-extrabold flex-1">
            {title}
          </div>
          <div className="flex min-h-full flex-col items-center justify-center flex-1">
            <p className="text-xl lg:text-2xl md:text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
