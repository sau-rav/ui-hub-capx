import { NavBar } from "../src/components/NavBar";
import { NextPage } from "next";

import { WaitlistHeader } from "../src/components/WaitlistHeader";
import { Counter } from "../src/components/counter";
import { Perks } from "../src/components/Perks";
import Footer from "../src/components/footer";

const Waitlist: NextPage = () => {
  return (
    <div className="bg-normal-black font-poppins">
      <NavBar />
      <WaitlistHeader />
      <Counter hideJoinWaitlistButton className="pb-32 md:pb-48" />
      <Perks />
      <Footer />
    </div>
  );
};

export default Waitlist;
