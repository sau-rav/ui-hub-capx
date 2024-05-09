import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export const Glimpse = (): JSX.Element => {
  return (
    <div className="lg:pt-48 pt-12 md:pt-24 flex flex-col bg-black gap-12">
      <div className="text-white justify-center italic flex gap-8 text-4xl lg:text-8xl md:text-6xl px-8">
        <p>
          <span className="text-golden">Sneak peek </span>
          <span>into what we are building</span>
        </p>
      </div>
      <div className="p-px bg-gradient-to-r from-black via-golden via-50& to-black inline-block w-full">
        <div
          className="bg-black py-40 flex justify-center w-full"
          style={{
            backgroundImage: 'url("hero-3.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <PlayCircleOutlineIcon
            className="text-golden"
            style={{ fontSize: "18vw" }}
          />
        </div>
      </div>
    </div>
  );
};
