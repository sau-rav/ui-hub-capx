import { NavBar } from "../src/components/NavBar";
import { Questions } from "../src/components/questions";
import Footer from "../src/components/footer";

const FAQ = (): JSX.Element => {
  return (
    <div className="bg-black font-montserrat flex flex-col h-full pb-12">
      <NavBar />
      <div className="text-golden flex justify-center text-2xl lg:text-5xl md:text-3xl lg:py-36 md:py-30 py-24 px-8 md:px-16 font-bold text-center">
        Frequently Asked Questions
      </div>
      <Questions />
      <Footer />
    </div>
  );
};

export default FAQ;
