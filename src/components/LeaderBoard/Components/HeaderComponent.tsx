import { useUser } from "../../../context/user";

export const HeaderComponent = () => {
  const userContextValue = useUser();
  const { user } = userContextValue ?? {};

  return (
    <div
      className="relative md:w-auto flex-shrink-0 rounded-md p-3 bg-cover bg-center text-center"
      style={{
        backgroundImage: `url('leaderBoardImg.png')`,
      }}
    >
      <div className="mt-40 mb-12 md:mb-40">
        <div className="font-semibold text-1xl md:text-4xl lg:text-5xl leading-tight tracking-widest text-white relative">
          W E L C O M E
        </div>

        <div className="font-black text-5xl md:text-9xl lg:text-9xl  relative bg-gradient-to-r from-golden-light via-golden to-golden-light text-transparent bg-clip-text leading-tight md:leading-normal lg:leading-normal">
          {user?.displayName ?? "Trader"}
        </div>
        <div className="restText text-lg md:text-xl lg:text-2xl font-semibold leading-normal text-center text-white">
          <span className="special-text text-golden">Congrats! </span>
        </div>
      </div>

      <div className="grid grid-cols-1 p-5">
        <div
          style={{ backgroundColor: "#1D1A1A" }}
          className="blur-sm gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between bg-gray-950 rounded-lg p-3"
        >
          <div className="overflow-hidden text-gray-300 flex-1 text-center text-xs sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
            Nirmal George
          </div>
          <div className="text-white flex-1 text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
            Rank #101
          </div>
          <div className="h-10 sm:h-10 md:h-16 h-12"></div>
          <div className="text-white flex-1 text-center text-xs md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
            0 referrals
          </div>
        </div>
        <div className="relative md:top-0 flex items-center justify-center gap-6 md:gap-10 rounded-xl p-0.5 bg-gradient-to-r from-[#674708] to-[#FFE7B8]">
          <div className="gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between bg-gray-950 rounded-lg p-3">
            <div className="overflow-hidden text-gray-300 flex-1 text-center text-xs sm:text-xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
              You
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-gray-600"
            ></div>
            <div className="text-golden flex-1 text-sm text-center text-lg md:text-3xl lg:text-4xl font-black leading-6 italic tracking-wide ">
              Rank #102
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-gray-600"
            ></div>
            <div className="text-golden flex-1 text-xs text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
              0 referrals
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#1D1A1A" }}
          className="blur-sm gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between bg-gray-950 rounded-lg p-3"
        >
          <div className="overflow-hidden text-gray-300 flex-1 text-center text-xs sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
            Andrew Tate
          </div>
          <div className="seperater h-10 sm:h-10 md:h-16 h-12"></div>
          <div className="text-white flex-1 text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
            Rank #103
          </div>
          <div className="seperater h-10 sm:h-10 md:h-16 h-12"></div>
          <div className="text-white flex-1 text-center text-xs md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
            0 referrals
          </div>
        </div>
      </div>
    </div>
  );
};
