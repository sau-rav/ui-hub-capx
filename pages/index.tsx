import type { NextPage } from "next";

import Footer from "../src/components/footer";
import { Header } from "../src/components/counter/header";
import { Features } from "../src/components/features";
import { TypingText } from "../src/components/TypingText";
import { NavBar } from "../src/components/NavBar";
import { Testimonial } from "../src/components/Testimonial";
import { FAQ } from "../src/components/FAQ";

import { TESTIMONY } from "../src/constants/testimony";

const Home: NextPage = () => {
  return (
    <div className="bg-normal-black font-poppins">
      <NavBar />
      <Header />
      <TypingText />
      <Features />
      <Testimonial title="Why trust CapX?" testimony={TESTIMONY} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
