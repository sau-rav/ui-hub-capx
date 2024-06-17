import { JoinWaitlist } from "../src/components/joinWaitlist";
import { NavBar } from "../src/components/NavBar";
import { NextPage } from "next";

const Waitlist: NextPage = () => {
  return (
    <div className="bg-normal-black font-montserrat">
      <NavBar />
      <JoinWaitlist />
    </div>
  );
};

export default Waitlist;
