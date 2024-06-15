import type { NextPage } from "next";

import Footer from "../src/components/footer";
import { Header } from "../src/components/HeaderV2";
import { Features } from "../src/components/features";

const Home: NextPage = () => {
  return (
    <div className="bg-black font-montserrat">
      <Header />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
