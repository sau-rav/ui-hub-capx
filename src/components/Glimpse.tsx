import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export const Glimpse = (): JSX.Element => {
  return (
    <div className="pt-16 lg:pt-32 flex flex-col bg-black gap-8">
      <div className="flex-1 text-white text-4xl lg:text-9xl md:text-7xl font-bold px-8 lg:px-32">
        Sneak peek into what we are building
      </div>
      <div className="p-px bg-gradient-to-r from-black via-golden via-50& to-black inline-block ">
        <div className="bg-black w-full h-full p-52 flex justify-center bg-hero-image-3 bg-cover">
          <PlayCircleOutlineIcon className="w-60 h-60 text-golden" />
        </div>
      </div>
    </div>
  );
};

