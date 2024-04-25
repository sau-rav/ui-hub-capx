export const RingBackdrop = (): JSX.Element => {
  return (
    <div
      className="overflow-hidden px-4 relative flex justify-center items-center text-white"
      style={{ height: "60vw" }}
    >
      <div
        className="rounded-full border-2 p-4 flex items-center justify-center overflow-hidden"
        style={{ height: "90vw", width: "90vw" }}
      >
        <div
          className="rounded-full border-2 flex items-center justify-center relative"
          style={{ height: "65vw", width: "65vw" }}
        >
          <div
            className="rounded-full border-2 flex items-center justify-center text-center flex-col"
            style={{ height: "40vw", width: "40vw" }}
          >
            <div className="rounded-full flex items-center justify-center text-center flex-col"
            style={{ height: "20vw", width: "20vw" }}
            >
            <div style={{ fontSize: "2vw"}}>
              <p>Be one of the first 2500 traders to test beta! Our public wait list is launching soon!</p>
            </div>
            <div className="mt-2" style={{ fontSize: "1.7vw", color: "gray"}}>
              <p>200+ traders have already signed up. Want to skip the public waitlist too? Then sign up now!</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
