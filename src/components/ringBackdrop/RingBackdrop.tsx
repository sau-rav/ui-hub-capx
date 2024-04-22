export const RingBackdrop = (): JSX.Element => {
  return (
    <div
      className="overflow-hidden px-4 relative flex justify-center items-center text-white"
      style={{ height: "738px" }}
    >
      <div
        className="rounded-full border-2 p-4 flex items-center justify-center"
        style={{ height: "100vw", width: "100vw" }}
      >
        <div
          className="rounded-full border-2 flex items-center justify-center relative"
          style={{ height: "70vw", width: "70vw" }}
        >
          {/* <div
            className="absolute w-32 h-32 bg-[#FFC34E] rounded-full"
            style={{ left: "-64px" }}
          ></div>
          <div
            className="absolute w-44 h-44 bg-[#89641B] rounded-full"
            style={{ right: "-88px" }}
            class="circle"
          ></div> */}
          <div
            className="rounded-full border-2 flex items-center justify-center text-center"
            style={{ height: "40vw", width: "40vw" }}
          >
            Be one of the first 2500 traders to test beta! Our public wait list
            is launching soon!
          </div>
        </div>
      </div>
    </div>
  );
};
