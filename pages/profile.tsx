import { useIsMobile } from "../src/hooks/useIsMobile";

import Footer from "../src/components/footer";
import { HeaderComponent } from "../src/components/LeaderBoard/Components/HeaderComponent";
import { NavBar } from "../src/components/NavBar";
import { Perks } from "../src/components/Perks";
import { FAQ } from "../src/components/FAQ";
import { Testimonial } from "../src/components/Testimonial";

import { PERKS } from "../src/constants/betaPerks";
import { TESTIMONY } from "../src/constants/profileTestimony";

import { withPage } from "../src/hoc/withPage";

const Profile = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-normal-black font-poppins">
      <NavBar />
      <HeaderComponent />

      <Testimonial
        title="Stay engaged with us and get early access!"
        testimony={TESTIMONY}
        className="mt-10 md:mt-16"
        showButton
      />
      <Perks
        heading="Perks of joining"
        highlightedHeading="Beta"
        perks={PERKS}
        className={`${isMobile ? "mt-20" : "mt-32"}`}
      />
      <FAQ />
      <Footer />
    </div>
  );
};

export default withPage(Profile);
