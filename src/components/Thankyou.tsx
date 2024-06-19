import { useIsMobile } from "../hooks/useIsMobile";

export const Thankyou = (): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-white gap-1 px-4 font-poppins gap-8 h-full pt-56 pb-24 md:py-60">
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <p className="text-3xl md:text-7xl font-semibold">Welcome to CapX,</p>
          <p className="text-3xl md:text-7xl font-semibold text-golden">
            Abhigyan
          </p>
        </div>
        <p
          className="text-lg md:text-2xl font-normal text-white text-center"
          style={isMobile ? undefined : { maxWidth: "60%" }}
        >
          We will go live soon! Stay connected with us on social media for the
          latest updates and exclusive content!
        </p>
      </div>
    </div>
  );
};
