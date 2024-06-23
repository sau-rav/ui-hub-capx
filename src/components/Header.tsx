import { Reveal } from "./Reveal";

export const Header = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center text-white gap-1 h-screen px-4 font-poppins text-center">
      <Reveal>
        <p className="text-3xl md:text-7xl font-bold">An AI-powered</p>
      </Reveal>
      <Reveal>
        <p className="text-3xl md:text-7xl font-bold">trading platform that</p>
      </Reveal>
      <Reveal>
        <p className="text-3xl md:text-7xl font-bold">works as your</p>
      </Reveal>
      <Reveal>
        <p className="text-3xl md:text-7xl font-bold font-bold">
          personal assistant
        </p>
      </Reveal>
      <Reveal sliderColor="#808080">
        <p className="text-2xl md:text-3xl font-bold text-golden-light text-center mt-4 md:mt-8">
          Research to investing, all-in-one place
        </p>
      </Reveal>
    </div>
  );
};
