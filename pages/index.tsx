import type { NextPage } from "next";

import { Divider } from "../src/components/Divider";
import { FeatureSlider } from "../src/components/featureSlider";
import Footer from "../src/components/Footer/Footer";
import { Glimpse } from "../src/components/Glimpse";
import { Header } from "../src/components/Header";
import { Introduction } from "../src/components/introduction";
import { NavBar } from "../src/components/NavBar";
import { NewFeatureCards } from "../src/components/newFeatureCards";
import { NewFeatures } from "../src/components/NewFeatures";
import { RingBackdrop } from "../src/components/ringBackdrop";

const Home: NextPage = () => {
  return (
    <div className="bg-black font-montserrat">
      <NavBar />
      <Header />
      <Divider />
      {/* <Divider /> */}
      <FeatureSlider />
      <Divider />
      <NewFeatures />
      <Divider />
      <NewFeatureCards />
      <Divider />
      {/* <Glimpse /> */}
      {/* <RingBackdrop /> */}
      {/* <Divider /> */}
      <Footer />
    </div>
  );
};

export default Home;
