import type { NextPage } from "next";

import Footer from "../src/components/footer";
import { Header } from "../src/components/Header";
import { Features } from "../src/components/features";
import { TypingText } from "../src/components/TypingText";
import { NavBar } from "../src/components/NavBar";
import { Counter } from "../src/components/counter";
import { Testimonial } from "../src/components/Testimonial";
import { FAQ } from "../src/components/FAQ";

const Home: NextPage = () => {
  return (
    <div className="bg-normal-black font-poppins">
      <NavBar />
      <Header />
      <TypingText />
      <Features />
      <Counter />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
