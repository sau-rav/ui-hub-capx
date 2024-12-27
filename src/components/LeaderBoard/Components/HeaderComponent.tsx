import { useUser } from "../../../context/user";
import { useCurrentUserRank } from "../hooks/useCurrentUserRank";
import { useLeaderboard } from "../hooks/useLeaderboard";

export const HeaderComponent = () => {
  const userContextValue = useUser();
  const { user } = userContextValue ?? {};

  const { data: standings } = useLeaderboard();
  const { data } = useCurrentUserRank({ userId: user?.userId });

  const { rank } = data ?? {};

  return (
    <div
      className="relative md:w-auto flex-shrink-0 rounded-md p-3 bg-cover bg-center text-center"
      style={{
        backgroundImage: `url('leaderBoardImg.png')`,
      }}
    >
      <div className="mt-40 mb-12 md:mb-40 flex flex-col items-center">
        <div className="font-semibold text-1xl md:text-4xl lg:text-5xl leading-tight tracking-widest text-white relative">
          W E L C O M E
        </div>

        <div className="font-black text-5xl md:text-9xl lg:text-9xl  relative bg-gradient-to-r from-golden-light via-golden to-golden-light text-transparent bg-clip-text leading-tight md:leading-normal lg:leading-normal">
          {user?.displayName ?? "Trader"}
        </div>
        <div className="restText text-lg md:text-xl lg:text-2xl font-semibold leading-normal text-center text-white">
          <span className="special-text text-golden">⭐️ Congrats! ⭐️</span>
        </div>
        <div className="font-semibold text-xl md:text-2xl lg:text-3xl leading-tight tracking-widest text-white relative">
          {rank > 0
            ? `Your current rank is ${rank}`
            : "Start referring to see your rank in the leaderboard"}
        </div>
      </div>

      <div className="font-semibold text-1xl md:text-4xl lg:text-5xl leading-tight tracking-widest text-gray-300 relative">
        Current Standings
      </div>

      <div className="grid grid-cols-1 p-5 gap-4">
        <div className="relative md:top-0 flex items-center justify-center gap-6 md:gap-10 rounded-xl p-0.5 bg-gradient-to-r from-[#674708] to-[#FFE7B8]">
          <div
            className={`gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between  rounded-lg p-3 ${
              rank === 1 ? "bg-transparent" : "bg-gray-950"
            }`}
          >
            <div className="text-golden overflow-hidden flex-1 text-center text-xs sm:text-xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
              {rank === 1 ? "You" : standings?.[0]?.fullName ?? "Harshita"}
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-gray-600"
            ></div>
            <div className="text-gray-300 flex-1 text-sm text-center text-lg md:text-3xl lg:text-4xl font-black leading-6 italic tracking-wide ">
              Rank #1
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-gray-600"
            ></div>
            <div className="text-golden flex-1 text-xs text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
              {`${standings?.[0]?.score ?? 0} referrals`}
            </div>
          </div>
        </div>
        <div className="relative md:top-0 flex items-center justify-center gap-6 md:gap-10 rounded-xl p-0.5 bg-gradient-to-r from-[#674708] to-[#FFE7B8]">
          <div
            className={`gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between  rounded-lg p-3 ${
              rank === 2 ? "bg-transparent" : "bg-gray-950"
            }`}
          >
            <div className="text-golden overflow-hidden flex-1 text-center text-xs sm:text-xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
              {rank === 2 ? "You" : standings?.[1]?.fullName ?? "Amitabh"}
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-gray-600"
            ></div>
            <div className="text-gray-300 flex-1 text-sm text-center text-lg md:text-3xl lg:text-4xl font-black leading-6 italic tracking-wide ">
              Rank #2
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-gray-600"
            ></div>
            <div className="text-golden flex-1 text-xs text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
              {`${standings?.[1]?.score ?? 0} referrals`}
            </div>
          </div>
        </div>
        <div className="relative md:top-0 flex items-center justify-center gap-6 md:gap-10 rounded-xl p-0.5 bg-gradient-to-r from-[#674708] to-[#FFE7B8]">
          <div
            className={`gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between  rounded-lg p-3 ${
              rank === 3 ? "bg-transparent" : "bg-gray-950"
            }`}
          >
            <div className="text-golden overflow-hidden  flex-1 text-center text-xs sm:text-xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
              {rank === 3 ? "You" : standings?.[2]?.fullName ?? "Muskan Jain"}
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-gray-600"
            ></div>
            <div className="text-gray-300 flex-1 text-sm text-center text-lg md:text-3xl lg:text-4xl font-black leading-6 italic tracking-wide ">
              Rank #3
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-gray-600"
            ></div>
            <div className="text-golden flex-1 text-xs text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
              {`${standings?.[2]?.score ?? 0} referrals`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
