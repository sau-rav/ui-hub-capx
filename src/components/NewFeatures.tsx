const DESCRIPTION =
  "Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis risMaecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora consectetur adipiscing elit. Etiam eu turpis risMaecenas eget condimentum velit, sit a";

export const NewFeatures = (): JSX.Element => {
  return (
    <div className="bg-black text-white flex flex-col justify-center text-center py-36 bg-hero-image-2 bg-cover">
      <div className="text-3xl lg:text-5xl md:text-4xl"> SAY HELLO TO</div>
      <div className="text-5xl lg:text-9xl md:text-7xl font-mono">Cap X</div>
      <div className="text-3xl lg:text-5xl md:text-4xl font-mono w-full px-20 pt-20">
        {DESCRIPTION}
      </div>
    </div>
  );
};
