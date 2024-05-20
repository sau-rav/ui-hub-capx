import type { NextPage } from "next";

import { Divider } from "../src/components/Divider";
import { FeatureSlider } from "../src/components/featureSlider";
import { Glimpse } from "../src/components/Glimpse";
import { Header } from "../src/components/Header";
import { Introduction } from "../src/components/introduction";
import { NavBar } from "../src/components/NavBar";
import { NewFeatureCards } from "../src/components/newFeatureCards";
import { Footer } from "../src/components/Footer";
import { TradersCount } from "../src/components/TradersCount";
import { NewFeatures } from "../src/components/NewFeatures";
import { RingBackdrop } from "../src/components/ringBackdrop";

const Home: NextPage = () => {
  return (
    <div className="bg-black font-montserrat">
      <NavBar />
      <Header />
      {/* <Divider /> */}
      {/* <Divider /> */}
      <NewFeatures />
      <Divider />
      <FeatureSlider />
      <Divider />
      <NewFeatureCards />
      {/* <Divider /> */}
      {/* <Glimpse /> */}
      {/* <RingBackdrop /> */}
      <Divider />
      <TradersCount />

      <Footer />
    </div>
  );
};

export default Home;
