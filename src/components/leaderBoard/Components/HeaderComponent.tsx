export const HeaderComponent = () => {
  return (
    <div
      className="relative md:w-auto flex-shrink-0 rounded-md p-3 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://s3-alpha-sig.figma.com/img/93aa/7f03/94276e3238cf354036cb12333fa6fe1f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QFo38OkCuPzXfo4LzHqvBwVj6so2Kb5WhTST1qWmxu3R0ZaX7LqKqlKGaQoS3f9~shF~8048jZv0WykjgEehgLH6Oh7IhEuQPQbhtTwARH2Sw9w1~aUN7ZfxPmx80x3FNWO57VIeSHFUG829D6weVU2qMydhMpwERDE~nN2u7tc6FJSTopw7keciwa6xd29GO835Jbdwe60F~xNhp5kl~PHELiuQ-4oWeXX-CfGYVWT5yP4XPtJ3QdFgx9b1bHu9pcL7WFQD1-aG-nzhNsTilUiSrva03OQsVLzacwpDZQqm7Y4S8G3QO4d9ro11qXzE1efKImndKA-K46krzSIxtw__')`,
      }}
    >
      <div
        className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-widest text-white font-montserrat relative"
        style={{ top: "156px", opacity: 0.9 }}
      >
        WELCOME
      </div>

      <div className="mt-40 font-black text-8xl md:text-9xl lg:text-9xl font-montserrat italic relative bg-gradient-to-r from-yellow-300 to-orange-500 text-transparent bg-clip-text">
        Nirmal
      </div>

      <div className="mb-10 restText text-lg md:text-xl lg:text-2xl font-semibold leading-normal text-center text-white mt-5">
        <span className="special-text text-yellow-500">Congrats! </span>You are
        in top 100
      </div>

      <div className="gap-2 grid grid-cols-1 p-5">
        <div className="mx-10 blur-lg relative md:top-0 flex items-center justify-center gap-6 rounded-xl p-1 bg-gradient-to-r from-[#674708] to-[#FFE7B8]">
          <div className="gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between bg-gray-950 rounded-lg p-3">
            <div className="overflow-hidden text-gray-300 flex-1 text-center text-xs sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide font-montserrat">
              Nirmal George Mathew
            </div>
            <div className="seperater h-10 sm:h-10 md:h-16 h-12"></div>
            <div className="text-yellow-200 flex-1 text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide font-montserrat">
              Rank #32
            </div>
            <div className="seperater h-10 sm:h-10 md:h-16 h-12"></div>
            <div className=" text-yellow-500 flex-1 text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide font-montserrat">
              12 referrals
            </div>
          </div>
        </div>
        <div className="relative md:top-0 flex items-center justify-center gap-6 md:gap-10 rounded-xl p-1 bg-gradient-to-r from-[#674708] to-[#FFE7B8]">
          <div className="gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between bg-gray-950 rounded-lg p-3">
            <div className="overflow-hidden text-gray-300 flex-1 text-center text-xs sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide font-montserrat">
              Nirmal George Mathew
            </div>
            <div className="seperater h-10 sm:h-10 md:h-16 h-12"></div>
            <div className="text-yellow-200 flex-1 text-xs text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide font-montserrat">
              Rank #32
            </div>
            <div className="seperater h-10 sm:h-10 md:h-16 h-12"></div>
            <div className=" text-yellow-500 flex-1 text-xs text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide font-montserrat">
              12 referrals
            </div>
          </div>
        </div>

        <div className="mx-10 blur-lg relative md:top-0 flex items-center justify-center gap-6 rounded-xl p-1 bg-gradient-to-r from-[#674708] to-[#FFE7B8]">
          <div className="gap-2 flex md:h-20 sm:h-16 lg:h-24 h-14 w-full items-center justify-between bg-gray-950 rounded-lg p-3">
            <div className="overflow-hidden text-gray-300 flex-1 text-center text-xs sm:text-2xl md:text-3xl lg:text-4xl font-black leading-6 italic tracking-wide font-montserrat">
              Nirmal George Mathew
            </div>
            <div className="seperater h-10 sm:h-10 md:h-16 h-12"></div>
            <div className="text-yellow-200 flex-1 text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide font-montserrat">
              Rank #32
            </div>
            <div className="seperater h-10 sm:h-10 md:h-16 h-12"></div>
            <div className=" text-yellow-500 flex-1 text-center text-lg md:text-3xl lg:text-4xl font-bold leading-6 italic tracking-wide font-montserrat">
              12 referrals
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
