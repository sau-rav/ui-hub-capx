import background from "../../public/headerBackground.svg";

export const Header = (): JSX.Element => {
  return (
    <div className="text-white flex flex-col justify-center text-center bg-hero-image bg-cover py-36">
      <div className="text-3xl lg:text-4xl md:text-3xl font-montserrat">
        INTRODUCING
      </div>
      <div className="text-5xl lg:text-9xl md:text-7xl font-mono">Cap X</div>
      <div className="text-2xl font-mono">
        Trading made simple and smarter
      </div>
    </div>
  );
};
