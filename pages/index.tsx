import type { NextPage } from "next";

import { Divider } from "../src/components/Divider";
import { FeatureSlider } from "../src/components/featureSlider";
import { Glimpse } from "../src/components/Glimpse";
import Footer from "../src/components/footer";
import { Header } from "../src/components/Header";
import { NavBar } from "../src/components/NavBar";
import { NewFeatureCards } from "../src/components/newFeatureCards";
import { TradersCount } from "../src/components/TradersCount";
import { NewFeatures } from "../src/components/NewFeatures";

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
