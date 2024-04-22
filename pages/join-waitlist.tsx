import { JoinWaitlist } from "../src/components/joinWaitlist";
import { Header } from "../src/components/Header";
import { NextPage } from "next";

const Waitlist: NextPage = () => {
    return (
      <div className="bg-black">
        <JoinWaitlist/>
      </div>
    );
  };
  
  export default Waitlist;