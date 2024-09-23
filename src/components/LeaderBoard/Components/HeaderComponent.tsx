import { useUser } from "../../../context/user";
import { useUserRank } from "../hooks/useUserRank";
import { useTopUsers } from "../hooks/useTopUsers";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { styled } from "@mui/material/styles";
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "rgba(254,152,57,1)",
    ...theme.applyStyles("dark", {
      backgroundColor: "rgba(1,88,4,1)",
    }),
  },
}));

const TopUsers = ({
  topUsers,
}: {
  topUsers: { userId: string; fullName: string; score: number }[];
}): JSX.Element => {
  return (
    <div className="flex flex-col lg:gap-8 md:gap-4 gap-4 px-4 md:px-20">
      {topUsers.map((user, index) => (
        <div className="gap-2 flex gap-4 md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between rounded-lg p-3 text-white">
          <div className="overflow-hidden text-golden md:flex-1 flex-none text-center text-lg md:text-xl lg:text-2xl font-bold leading-6 italic tracking-wide ">
            {(index + 1).toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </div>
          <div
            style={{ width: "1px" }}
            className="h-10 sm:h-10 md:h-16 h-12 bg-white"
          ></div>
          <div className="flex-1 text-sm text-center text-lg md:text-xl lg:text-2xl font-black leading-6 italic tracking-wide ">
            {user.fullName}
          </div>
          <div
            style={{ width: "1px" }}
            className="h-10 sm:h-10 md:h-16 h-12 bg-white"
          ></div>
          <div className="flex-1 text-xs text-center text-lg md:text-xl lg:text-2xl font-bold leading-6 italic tracking-wide">
            {user.score} referrals
          </div>
        </div>
      ))}
    </div>
  );
};

export const HeaderComponent = () => {
  const userContextValue = useUser();
  const { user } = userContextValue ?? {};

  const {
    data: topUsers,
    isLoading: topUsersLoading,
    error: topUsersError,
  } = useTopUsers();

  const { data: userRank, isLoading, error } = useUserRank();

  let leaderBoardTableEl;

  if (isLoading || topUsersLoading) {
    leaderBoardTableEl = (
      <div className="lg:p-20 md:p-10 pt-0 flex flex-col lg:gap-8 md: gap-4">
        <div className="text-white md:text-lg lg:text-xl">
          Please wait while we are loading leader board
        </div>
        <BorderLinearProgress />
      </div>
    );
  } else if (error || topUsersError || !topUsers || !userRank) {
    leaderBoardTableEl = (
      <div className="lg:p-20 md:p-10 lg:pt-0 md:pt-0 flex flex-col lg:gap-8 md: gap-4">
        <div className="text-white md:text-lg lg:text-xl">
          ⚠️ ⚠️ ⚠️ Some error occurred while fetching leader board. Please try
          again later. ⚠️ ⚠️ ⚠️
        </div>
      </div>
    );
  } else {
    leaderBoardTableEl = (
      <div className="flex flex-col md:gap-10 sm:gap-10 lg:gap-8 h-full">
        <TopUsers topUsers={topUsers} />
      </div>
    );
  }

  let userRankEl;
  if (userRank) {
    if (userRank.rank === -1 && 0) {
      userRankEl = (
        <div className="text-white text-xs text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide py-16 md:py-24">
          Please refer to see your rank on the leader board
        </div>
      );
    } else {
      userRankEl = (
        <div className="flex flex-col gap-4 px-4 md:px-20">
          <div className="flex p-3">
            <div className="md:flex-1 flex-none flex flex-col items-center justify-center text-white gap-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
          </div>

          <div className="border border-solid rounded-full border-golden gap-2 flex gap-4 md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between rounded-lg p-3 text-white">
            <div className="overflow-hidden text-golden md:flex-1 flex-none text-center text-xs sm:text-xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
              {userRank.rank.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-white"
            ></div>
            <div className="flex-1 text-sm text-center text-lg md:text-3xl lg:text-4xl font-black leading-6 italic tracking-wide ">
              YOU
            </div>
            <div
              style={{ width: "1px" }}
              className="h-10 sm:h-10 md:h-16 h-12 bg-white"
            ></div>
            <div className="flex-1 text-xs text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide">
              {userRank.score} referrals
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div
      className="relative md:w-auto flex-shrink-0 rounded-md p-3 bg-cover bg-center text-center flex flex-col"
      style={{
        backgroundImage: `url('leaderBoardImg.png')`,
      }}
    >
      <div className="mt-40 mb-12 md:mb-20">
        <div className="font-semibold text-1xl md:text-4xl lg:text-5xl leading-tight tracking-widest text-white relative">
          W E L C O M E
        </div>

        <div className="font-black text-5xl md:text-9xl lg:text-9xl  relative bg-gradient-to-r from-golden-light via-golden to-golden-light text-transparent bg-clip-text leading-tight md:leading-normal lg:leading-normal">
          {user?.displayName ?? "Trader"}
        </div>
        <div className="restText text-lg md:text-xl lg:text-2xl font-semibold leading-normal text-center text-white">
          <span className="special-text text-golden">⭐️ Congrats! ⭐️</span>
        </div>
      </div>

      {leaderBoardTableEl}

      {userRankEl}
      {/* 
      <div className="grid grid-cols-1 p-5">
        <div
          style={{ backgroundColor: "#1D1A1A" }}
          className="blur-sm gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between bg-gray-950 rounded-lg p-3"
        >
          <div className="overflow-hidden text-gray-300 flex-1 text-center text-xs sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide ">
            Harshita Jha
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
            Muskan Jain
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
      </div> */}
    </div>
  );
};
