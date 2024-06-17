import { useIsMobile } from "../hooks/useIsMobile";
import { FadeInOut } from "./FadeInOut";

export const Testimonial = (): JSX.Element => {
  const isMobile = useIsMobile();
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center pt-16 gap-0 overflow-visible px-4 md:px-16 text-light-grey">
        <div className="flex flex-col items-center justify-center w-full px-4 gap-4">
          <FadeInOut>
            <p className="text-4xl font-bold md:text-7xl text-center mb-6 text-white">
              Why trust CapX?
            </p>
          </FadeInOut>
          <div className={`flex gap-4 ${isMobile ? "flex-col" : "flex-row"}`}>
            <div
              className="p-11 bg-light-black flex-1 rounded-3xl text-3xl"
              style={{ flexGrow: 1 }}
            >
              Daily Indian traders suffer losses due to lack of guidance and
              self-control
            </div>
            <div
              className="p-11 bg-light-black rounded-3xl text-3xl flex-1 flex flex-col gap-4"
              style={{ flexGrow: 3 }}
            >
              <div className="flex-1 w-full md:w-2/3">
                Daily Indian traders suffer losses due to lack of guidance and
                self-control
              </div>
              <div className="flex justify-end text-lite-yellow text-7xl md:text-9xl font-bold">
                123cr
              </div>
            </div>
          </div>
          <div
            className={`p-11 bg-light-black w-full rounded-3xl flex gap-4 ${
              isMobile ? "flex-col text-center" : "flex-row text-left"
            }`}
          >
            <div
              className="flex justify-center text-lite-yellow text-7xl md:text-9xl font-bold md:p-6"
              style={{ flexGrow: 1 }}
            >
              1234
            </div>
            <div
              style={{ flexGrow: 3 }}
              className="text-3xl flex items-center md:p-6"
            >
              Daily Indian traders suffer losses due to lack of guidance and
              self-control
            </div>
          </div>
          <div
            className={`p-11 bg-light-black w-full rounded-3xl flex gap-4 ${
              isMobile ? "flex-col text-center" : "flex-row text-left"
            }`}
          >
            <div
              style={{ flexGrow: 3 }}
              className="text-3xl flex items-center md:p-6"
            >
              Daily Indian traders suffer losses due to lack of guidance and
              self-control
            </div>
            <div
              className="flex justify-center text-lite-yellow text-7xl md:text-9xl font-bold md:p-6"
              style={{ flexGrow: 1 }}
            >
              1234
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
