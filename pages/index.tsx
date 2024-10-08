import type { NextPage } from "next";
import { useState, useEffect } from "react";

import Footer from "../src/components/footer";
import { Header } from "../src/components/counter/header";
import { Features } from "../src/components/features";
import { TypingText } from "../src/components/TypingText";
import { NavBar } from "../src/components/NavBar";
import { Testimonial } from "../src/components/Testimonial";
import { FAQ } from "../src/components/FAQ";

import { withPage } from "../src/hoc/withPage";

import { TESTIMONY } from "../src/constants/testimony";

const Home: NextPage = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  return rendered ? (
    <div className="bg-normal-black font-poppins">
      <NavBar />
      <Header />
      <TypingText />
      <Features />
      <Testimonial title="Why trust CapX?" testimony={TESTIMONY} />
      <FAQ />
      <Footer />
    </div>
  ) : (
    <></>
  );
};

export default withPage(Home);
