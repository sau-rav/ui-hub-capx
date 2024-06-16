import type { NextPage } from "next";

import Footer from "../src/components/footer";
import { Header } from "../src/components/HeaderV2";
import { Features } from "../src/components/features";
import { TypingText } from "../src/components/TypingText";
import { NavBarV2 } from "../src/components/NavBar";

const Home: NextPage = () => {
  return (
    <div className="bg-black font-montserrat">
      <NavBarV2 />
      <Header />
      <TypingText />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
