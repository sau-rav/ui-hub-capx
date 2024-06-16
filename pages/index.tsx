import type { NextPage } from "next";

import Footer from "../src/components/footer";
import { Header } from "../src/components/HeaderV2";
import { Features } from "../src/components/features";
import { TypingText } from "../src/components/TypingText";
import { NavBarV2 } from "../src/components/NavBar";
import { Counter } from "../src/components/counter";

const Home: NextPage = () => {
  return (
    <div className="bg-normal-black font-montserrat">
      <NavBarV2 />
      <Header />
      <TypingText />
      <Features />
      <Counter />
      <Footer />
    </div>
  );
};

export default Home;
