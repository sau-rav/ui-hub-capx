import type { NextPage } from "next";

import { Divider } from "../src/components/Divider";
import { FeatureSlider } from "../src/components/featureSlider";
import Footer from "../src/components/footer";
import { Header } from "../src/components/Header";
import { NavBar } from "../src/components/NavBar";
import { NewFeatureCards } from "../src/components/newFeatureCards";
import { NewFeatures } from "../src/components/NewFeatures";
import { Counter } from "../src/components/counter";

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
      <Counter />

      <Footer />
    </div>
  );
};

export default Home;
