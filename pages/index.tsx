import type { NextPage } from "next";

import { NavBar } from "../src/components/NavBar";
import { Introduction } from "../src/components/introduction";
import { Glimpse } from "../src/components/Glimpse";
import { FeatureGallery } from "../src/components/featureGallery";
import { Header } from "../src/components/Header";
import { FeatureSlider } from "../src/components/featureSlider";
import { RingBackdrop } from "../src/components/ringBackdrop";
import { Divider } from "../src/components/Divider";
import { NewFeatures } from "../src/components/NewFeatures";
import { NewFeatureCards } from "../src/components/newFeatureCards";
import { Footer } from "../src/components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <NavBar/>
      <Header />
      {/* <Divider /> */}
      <FeatureSlider />
      <Divider />
      <NewFeatures />
      <Divider />
      <NewFeatureCards />
      <Divider />
      <Glimpse />
      <RingBackdrop />
      <Divider />
      <Footer />
    </div>
  );
};

export default Home;
