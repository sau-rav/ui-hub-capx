import { NavBar } from "../src/components/NavBar";
import { NextPage } from "next";

import { useIsMobile } from "../src/hooks/useIsMobile";

import { WaitlistHeader } from "../src/components/WaitlistHeader";
import { Counter } from "../src/components/counter";
import { Perks } from "../src/components/Perks";
import Footer from "../src/components/footer";
import { Steps } from "../src/components/Steps";
import { FAQ } from "../src/components/FAQ";

import { PERKS } from "../src/constants/JoinWaitlistPerks";

import { withPage } from "../src/hoc/withPage";

const Waitlist: NextPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-normal-black font-poppins">
      <NavBar />
      <WaitlistHeader />
      <Steps />
      <Counter
        hideJoinWaitlistButton
        className={`${isMobile ? "py-20" : "py-32"}`}
      />
      <Perks
        heading="Perks of joining"
        highlightedHeading="waitlist"
        perks={PERKS}
      />
      <FAQ />
      <Footer />
    </div>
  );
};

export default withPage(Waitlist);
