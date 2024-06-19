import { NavBar } from "../src/components/NavBar";
import { NextPage } from "next";

import { Thankyou } from "../src/components/Thankyou";
import Footer from "../src/components/footer";

const ThankyouPage: NextPage = () => {
  return (
    <div className="bg-normal-black font-montserrat">
      <NavBar />
      <Thankyou />
      <Footer />
    </div>
  );
};

export default ThankyouPage;
