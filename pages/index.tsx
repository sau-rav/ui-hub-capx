import type { NextPage } from "next";

import Footer from "../src/components/footer";
import { Header } from "../src/components/Header";
import { Features } from "../src/components/features";
import { TypingText } from "../src/components/TypingText";
import { NavBar } from "../src/components/NavBar";
import { Counter } from "../src/components/counter";
import { Testimonial } from "../src/components/Testimonial";

const Home: NextPage = () => {
  return (
    <div className="bg-normal-black font-montserrat">
      <NavBar />
      <Header />
      <TypingText />
      <Features />
      <Counter />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
