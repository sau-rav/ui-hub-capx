import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export const Glimpse = (): JSX.Element => {
  return (
    <div className="pt-16 lg:pt-32 flex flex-col bg-black gap-8">
      <div className="flex-1 text-white text-4xl mb-8 lg:text-6xl md:text-4xl text-center font-bold px-8 lg:px-32">
        Sneak peek into what we are building
      </div>
      <div className="p-px bg-gradient-to-r from-black via-golden via-50& to-black inline-block ">
        <div className="bg-black w-full h-full p-52 flex justify-center bg-cover"
          style={{ 
            backgroundImage: 'url("hero-3.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <PlayCircleOutlineIcon className="text-golden" style={{ fontSize: "18vw"}} />
        </div>
      </div>
    </div>
  );
};

