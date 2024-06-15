import { Reveal } from "./Reveal";

export const Header = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center text-white gap-2 h-screen">
      <Reveal>
        <p className="text-4xl md:text-7xl">An AI-powered</p>
      </Reveal>
      <Reveal>
        <p className="text-4xl md:text-7xl">trading platform that</p>
      </Reveal>
      <Reveal>
        <p className="text-4xl md:text-7xl">works as your</p>
      </Reveal>
      <Reveal>
        <p className="text-4xl md:text-7xl font-bold">personal assistant</p>
      </Reveal>
      <Reveal sliderColor="#808080">
        <p className="text-2xl text-golden-light-light text-center">
          Research to investing, all-in-one place
        </p>
      </Reveal>
    </div>
  );
};
